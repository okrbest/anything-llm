import { useRef, useState } from "react";
import { titleCase } from "text-case";
import { useTranslation, Trans } from "react-i18next";
import Admin from "@/models/admin";
import EditUserModal from "./EditUserModal";
import showToast from "@/utils/toast";
import { useModal } from "@/hooks/useModal";
import ModalWrapper from "@/components/ModalWrapper";

const ModMap = {
  admin: ["admin", "manager", "default"],
  manager: ["manager", "default"],
  default: [],
};

export default function UserRow({ currUser, user }) {
  const { t } = useTranslation();
  const rowRef = useRef(null);
  const canModify = ModMap[currUser?.role || "default"].includes(user.role);
  const [suspended, setSuspended] = useState(user.suspended === 1);
  const { isOpen, openModal, closeModal } = useModal();

  const handleSuspend = async () => {
    const confirmMessage = suspended
      ? t("userRow.unsuspendConfirm", { username: user.username })
      : t("userRow.suspendConfirm", { username: user.username });

    if (!window.confirm(confirmMessage)) return false;

    const { success, error } = await Admin.updateUser(user.id, {
      suspended: suspended ? 0 : 1,
    });
    if (!success) showToast(error, "error", { clear: true });
    if (success) {
      const message = suspended
        ? t("userRow.unsuspendApplied")
        : t("userRow.suspendApplied");
      showToast(message, "success", { clear: true });
      setSuspended(!suspended);
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(t("userRow.deleteConfirm", { username: user.username }))
    )
      return false;

    const { success, error } = await Admin.deleteUser(user.id);
    if (!success) showToast(error, "error", { clear: true });
    if (success) {
      rowRef?.current?.remove();
      showToast(t("userRow.deleteSuccess"), "success", { clear: true });
    }
  };

  return (
    <>
      <tr
        ref={rowRef}
        className="bg-transparent text-white text-opacity-80 text-sm font-medium"
      >
        <th scope="row" className="px-6 py-4 whitespace-nowrap">
          {user.username}
        </th>
        <td className="px-6 py-4">{t(`userRole.${user.role}`)}</td>
        <td className="px-6 py-4">{user.createdAt}</td>
        <td className="px-6 py-4 flex items-center gap-x-6">
          {canModify && (
            <button
              onClick={openModal}
              className="text-sm font-medium text-white/80 rounded-lg hover:text-white px-2 py-1 hover:bg-white hover:bg-opacity-10"
            >
              {t("userRow.edit")}
            </button>
          )}
          {currUser?.id !== user.id && canModify && (
            <>
              <button
                onClick={handleSuspend}
                className="text-sm font-medium text-white/80 hover:text-orange-300 rounded-lg px-2 py-1 hover:bg-white hover:bg-opacity-10"
              >
                {suspended ? t("userRow.unsuspend") : t("userRow.suspend")}
              </button>
              <button
                onClick={handleDelete}
                className="text-sm font-medium text-white/80 hover:text-red-300 px-2 py-1 rounded-lg hover:bg-red-800 hover:bg-opacity-20"
              >
                {t("userRow.delete")}
              </button>
            </>
          )}
        </td>
      </tr>
      <ModalWrapper isOpen={isOpen}>
        <EditUserModal
          currentUser={currUser}
          user={user}
          closeModal={closeModal}
        />
      </ModalWrapper>
    </>
  );
}
