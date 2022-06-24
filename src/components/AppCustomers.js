import CustomersService from "../services/CustomersService";
import React, { useState } from "react";

    function AppCustomers() {
    const [customers, setCustomers] = useState(CustomersService.getAll());


    return (
<div>
        {customers.map((customer, id) => (
            <Customers
              key={customer.id}
              id={customer.id}
              Ime={customer.ime}
              Prezime={customer.prezime}
            />
 ))}
</div>
    )
}




export default AppCustomers;



