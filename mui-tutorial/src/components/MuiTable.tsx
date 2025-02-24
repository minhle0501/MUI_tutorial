import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const tableData = [
  [
    {
      id: 1,
      first_name: "Ted",
      last_name: "Carding",
      email: "tcarding0@un.org",
      gender: "Female",
      ip_address: "246.165.3.160",
    },
    {
      id: 2,
      first_name: "Deena",
      last_name: "Adair",
      email: "dadair1@google.co.uk",
      gender: "Non-binary",
      ip_address: "227.217.42.166",
    },
    {
      id: 3,
      first_name: "Cherry",
      last_name: "Kingsnode",
      email: "ckingsnode2@shareasale.com",
      gender: "Female",
      ip_address: "87.220.95.155",
    },
    {
      id: 4,
      first_name: "Olly",
      last_name: "Nodin",
      email: "onodin3@weibo.com",
      gender: "Female",
      ip_address: "176.137.1.162",
    },
    {
      id: 5,
      first_name: "Sunshine",
      last_name: "Brian",
      email: "sbrian4@vinaora.com",
      gender: "Female",
      ip_address: "164.4.130.233",
    },
    {
      id: 6,
      first_name: "Leora",
      last_name: "Castenda",
      email: "lcastenda5@state.gov",
      gender: "Female",
      ip_address: "21.160.211.63",
    },
    {
      id: 7,
      first_name: "Marlow",
      last_name: "Stollenbecker",
      email: "mstollenbecker6@t.co",
      gender: "Polygender",
      ip_address: "195.182.189.120",
    },
    {
      id: 8,
      first_name: "Adoree",
      last_name: "Westphalen",
      email: "awestphalen7@soundcloud.com",
      gender: "Female",
      ip_address: "55.27.113.201",
    },
    {
      id: 9,
      first_name: "Alexandros",
      last_name: "Sackler",
      email: "asackler8@php.net",
      gender: "Bigender",
      ip_address: "125.158.23.216",
    },
    {
      id: 10,
      first_name: "Vevay",
      last_name: "Barrs",
      email: "vbarrs9@issuu.com",
      gender: "Female",
      ip_address: "170.155.23.6",
    },
  ],
];
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell align="center">IP Address</TableCell>
            </TableRow>
            </TableHead>
        <TableBody>
            {
                tableData[0].map((row) => (
                    <TableRow key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.gender}</TableCell>
                        <TableCell align="center">{row.ip_address}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
