interface Route {
    path: string;
    icon: string;
    label: string;
}

interface TableColumns {
    key: string;
    title: string;
    dataIndex: string;
    render?: (text: string, record: string) => JSX.Element;
}

interface User {
    _id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
    phone: string;
}
