import React, {useEffect, useState} from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material'

const columns = [
    { 
        id: "id", 
        label: "ID", 
        minWidth: 100 
    },
    { 
        id: "local", 
        label: "Local", 
        minWidth: 170 
    },
    { 
        id: "comprador", 
        label: "Comprador", 
        minWidth: 100 
    },
    {
        id: "estado",
        label: "Estado",
        minWidth: 170,
        align: "right"
    },
    {
        id: "monto",
        label: "Monto",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2)
    },
    {
        id: "comisión",
        label: "Comisión",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2)
    }
];

// function createData(id, local, comprador, estado, monto) {
//     const comisión = monto / 2;
//     return { id, local, comprador, estado, monto, comisión };
// }

const history = [
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
    {id: 1, local: 'null', comprador: 'null2', estado: 'pending', monto: 10, comisión: 12},
]
    
    export default function ColumnGroupingTable() {
    // const [rows, setRows] = useState([])
    // useEffect(() => {
        // history.map( (order) => {
        //     const comisión = order.amount / 2;
        //     // order.userId &&
        //     setRows([...rows, {id: order._id, local: 'null', comprador: 'null2', estados: order.status, monto: order.amount, comisión: comisión}])
        //     console.log(rows)
        // })
    // }, [])
    // console.log(history2)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "99%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {history
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={history.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    );
}
