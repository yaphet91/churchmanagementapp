import AdminLayout from '@/Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/react';

const StatCard = ({ label, value, href }) => {
    const content = (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
};

const formatName = (record) => {
    return [record.first_name, record.father_name, record.grand_father_name].filter(Boolean).join(' ');
};

const AdminDashboard = () => {
    const { admin, summary } = usePage().props;
    const totals = summary?.totals || {};
    const recentMembers = summary?.recentMembers || [];
    const recentGroups = summary?.recentGroups || [];
    const recentEvents = summary?.recentEvents || [];

    return (
        <AdminLayout admin={admin}>
            <div className="space-y-8">
                <section className="rounded-2xl bg-slate-950 px-6 py-8 text-white shadow-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Admin Dashboard</p>
                    <h1 className="mt-3 text-3xl font-semibold">Testing workspace for the church admin portal</h1>
                    <p className="mt-3 max-w-3xl text-sm text-slate-300">
                        Authentication barriers are relaxed for local testing. The cards and lists below are now backed by live database counts so you can validate the admin flow without signing in.
                    </p>
                </section>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard label="Members" value={totals.members || 0} href="/admin/people/adults" />
                    <StatCard label="Children" value={totals.children || 0} href="/admin/people/children" />
                    <StatCard label="Groups" value={totals.groups || 0} href="/admin/groups" />
                    <StatCard label="Events" value={totals.events || 0} href="/admin/event/page/" />
                    <StatCard label="Users" value={totals.users || 0} href="/admin/users" />
                    <StatCard label="Roles" value={totals.roles || 0} href="/admin/roles" />
                    <StatCard label="Admins" value={totals.admins || 0} />
                </section>

                <section className="grid gap-6 xl:grid-cols-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Members</h2>
                            <Link className="text-sm text-blue-600" href="/admin/people/adults">View all</Link>
                        </div>
                        <div className="space-y-3">
                            {recentMembers.length ? recentMembers.map((member) => (
                                <div key={member.id} className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
                                    <div className="font-medium text-slate-900 dark:text-white">{formatName(member)}</div>
                                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        {member.card_number || 'No card'}{member.email ? ` • ${member.email}` : ''}
                                    </div>
                                </div>
                            )) : <p className="text-sm text-slate-500">No members found.</p>}
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Groups</h2>
                            <Link className="text-sm text-blue-600" href="/admin/groups">Manage groups</Link>
                        </div>
                        <div className="space-y-3">
                            {recentGroups.length ? recentGroups.map((group) => (
                                <div key={group.id} className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
                                    <div className="font-medium text-slate-900 dark:text-white">{group.title}</div>
                                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        {group.members_count || 0} members • {group.visibility || 'private'}
                                    </div>
                                </div>
                            )) : <p className="text-sm text-slate-500">No groups found.</p>}
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Events</h2>
                            <Link className="text-sm text-blue-600" href="/admin/event/page/">Open events</Link>
                        </div>
                        <div className="space-y-3">
                            {recentEvents.length ? recentEvents.map((event) => (
                                <div key={event.id} className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
                                    <div className="font-medium text-slate-900 dark:text-white">{event.title}</div>
                                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        {[event.date, event.start_time, event.location].filter(Boolean).join(' • ') || 'Schedule not set'}
                                    </div>
                                </div>
                            )) : <p className="text-sm text-slate-500">No events found.</p>}
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
