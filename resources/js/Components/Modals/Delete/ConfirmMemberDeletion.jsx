import React from 'react'

const ConfirmMemberDeletion = () => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };
  return (
      <Modal show={confirmingUserDeletion} onClose={closeModal}>
          <form onSubmit={deleteUser} className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  Are you sure you want to delete this member?
              </h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Once you delete the member, all of its related data will be permanently deleted. Please
                  click the delete button to confirm you would like to permanently delete the member.
              </p>

             

              <div className="mt-6 flex justify-end">
                  <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                  <DangerButton className="ms-3" disabled={processing}>
                      Delete Account
                  </DangerButton>
              </div>
          </form>
      </Modal>
  )
}

export default ConfirmMemberDeletion;
