import AdminLayout from '@/Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/react';

const formatName = (record) => {
    return [record.first_name, record.father_name, record.grand_father_name].filter(Boolean).join(' ');
};

const AdminMessages = () => {
    const { admin, messageSummary } = usePage().props;
    const totals = messageSummary?.totals || {};
    const recipients = messageSummary?.recentRecipients || [];

    return (
        <AdminLayout admin={admin}>
            <div className="space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Messaging Overview</h1>
                    <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                        There is no dedicated messaging backend in this repo yet, so this screen now exposes live contact readiness data from memberships and users to support dashboard testing.
                    </p>
                </section>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-xl bg-emerald-50 p-5 text-emerald-950">
                        <p className="text-sm uppercase tracking-wide">Members with email</p>
                        <p className="mt-3 text-3xl font-semibold">{totals.membersWithEmail || 0}</p>
                    </div>
                    <div className="rounded-xl bg-sky-50 p-5 text-sky-950">
                        <p className="text-sm uppercase tracking-wide">Members with phone</p>
                        <p className="mt-3 text-3xl font-semibold">{totals.membersWithPhone || 0}</p>
                    </div>
                    <div className="rounded-xl bg-violet-50 p-5 text-violet-950">
                        <p className="text-sm uppercase tracking-wide">Users with email</p>
                        <p className="mt-3 text-3xl font-semibold">{totals.usersWithEmail || 0}</p>
                    </div>
                    <div className="rounded-xl bg-amber-50 p-5 text-amber-950">
                        <p className="text-sm uppercase tracking-wide">Missing contact info</p>
                        <p className="mt-3 text-3xl font-semibold">{totals.missingContactInfo || 0}</p>
                    </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Recipients</h2>
                        <Link className="text-sm text-blue-600" href="/admin/people/adults">Open people list</Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                            <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                <tr>
                                    <th className="py-3 pr-4">Name</th>
                                    <th className="py-3 pr-4">Card</th>
                                    <th className="py-3 pr-4">Email</th>
                                    <th className="py-3 pr-4">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recipients.length ? recipients.map((recipient) => (
                                    <tr key={recipient.id} className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-3 pr-4 text-slate-900 dark:text-white">{formatName(recipient)}</td>
                                        <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">{recipient.card_number || '-'}</td>
                                        <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">{recipient.email || '-'}</td>
                                        <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">{recipient.phone || '-'}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td className="py-4 text-slate-500" colSpan="4">No recipients available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default AdminMessages;
