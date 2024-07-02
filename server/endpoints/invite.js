const { EventLogs } = require("../models/eventLogs");
const { Invite } = require("../models/invite");
const { User } = require("../models/user");
const { reqBody } = require("../utils/http");

function inviteEndpoints(app) {
  if (!app) return;

  app.get("/invite/:code", async (request, response) => {
    const { t } = request.i18n; // get translation function for current language
    try {
      const { code } = request.params;
      const invite = await Invite.get({ code });
      if (!invite) {
        response
          .status(200)
          .json({ invite: null, error: t("invite.notFound") });
        return;
      }

      if (invite.status !== "pending") {
        response.status(200).json({ invite: null, error: t("invite.invalid") });
        return;
      }

      response
        .status(200)
        .json({ invite: { code, status: invite.status }, error: null });
    } catch (e) {
      console.error(e);
      response.sendStatus(500).end();
    }
  });

  app.post("/invite/:code", async (request, response) => {
    const { t } = request.i18n; // get translation function for current language
    try {
      const { code } = request.params;
      const { username, password } = reqBody(request);
      const invite = await Invite.get({ code });
      if (!invite || invite.status !== "pending") {
        response
          .status(200)
          .json({ success: false, error: t("invite.invalid") });
        return;
      }

      const { user, error } = await User.create({
        username,
        password,
        role: "default",
      });
      if (!user) {
        console.error("Accepting invite:", error);
        response
          .status(200)
          .json({ success: false, error: t("invite.userCreationFailed") });
        return;
      }

      await Invite.markClaimed(invite.id, user);
      await EventLogs.logEvent(
        "invite_accepted",
        {
          username: user.username,
        },
        user.id
      );

      response.status(200).json({ success: true, error: null });
    } catch (e) {
      console.error(e);
      response.sendStatus(500).end();
    }
  });
}

module.exports = { inviteEndpoints };
