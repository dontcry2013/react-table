export const userColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => {
      return a.id - b.id;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => {
      return a.name.localeCompare(b.name);
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "City",
    key: "city",
    render: record => {
      return record.address.city;
    }
  },
  {
    title: "Company",
    key: "company",
    render: record => {
      return record.company.name;
    }
  },
];
