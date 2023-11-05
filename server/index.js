const express = require("express")
const cors = require("cors")
const prisma = require("./db")

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// create an employee
app.post("/employees", async (req, res) => {
    try {
        const { firstName, lastName, dept, title, dob, salary, email } = req.body;
        const selectedDateObject = new Date(dob)
        const isoDateTime = selectedDateObject.toISOString()
        const newEmployee = await prisma.employee.create({
            data: { firstName, lastName, dept, title, dob: isoDateTime, salary: Number(salary), email },
        });
        await prisma.$disconnect()
        return res.json({ status: 201, data: newEmployee, message: "Employee created successfully" })
    } catch (error) {
        console.error(error.message)
        return res.json({ status: 500, message: "Employee could not be created successfully" })
    }
})

// get all employees
app.get("/employees", async (req, res) => {
    try {
        const allEmployees = await prisma.employee.findMany();
        await prisma.$disconnect()
        return res.status(200).json(allEmployees);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal Server Error - unable to retrieve all the employees from the database" });
    }
});

// get a specific employee by id 
app.get("/employees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await prisma.employee.findUnique({
            where: {
                id: Number(id)
            }
        });
        await prisma.$disconnect()
        return res.status(200).json(employee)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Employee details could be retrieve from database" })
    }
})

// update an employee
app.put("/employees/:id", async (req, res) => {
    try {
        const { firstName, lastName, dept, title, dob, salary, email } = req.body;
        const { id } = req.params;
        const updateEmployee = await prisma.employee.update({
            where: {
                id: Number(id)
            },
            data: { firstName, lastName, dept, title, dob, salary:Number(salary), email }
        });
        await prisma.$disconnect()
        if (!updateEmployee) {
            return res.json({ status: 500, message: "Employee details could be updated from database" })
        }
        return res.json({ status: 200, message: "Employee details updated successfully", data: updateEmployee })
    } catch (error) {
        console.error(error.message)
        return res.json({ status: 500, message: "Employee details could be updated from database" })
    }
})

// delete a specific employee details 
app.delete("/employees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await prisma.employee.delete({
            where: {
                id:Number(id)
            }
        });
        await prisma.$disconnect()
        if (!deletedEmployee) {
            return res.json({ status: 500, message: "Employee details could be deleted from database" })
        }
        return res.json({ status: 200, message: "Employee details deleted successfully" })
    } catch (error) {
        console.error(error.message)
        return res.json({ status: 500, message: "Employee details could be deleted from database" })
    }
})

// delete all employee from the database 
app.delete("/employees", async (req, res) => {
    try {
        const deletedEmployees = await prisma.employee.deleteMany();
        if (!deletedEmployees) {
            return res.json({ status: 500, message: "All Employee details could not be deleted from database" })
        }
        await prisma.$disconnect()
        return res.json({ status: 200, message: "All Employee details deleted successfully" })
    } catch (error) {
        console.error(error.message)
        return res.json({ status: 500, message: "All Employee details could not be deleted from database" })
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
