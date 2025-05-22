import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9191/api/v1/employees";

// GET all employees
const getEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
};

// GET single employee by ID
const getEmployeeById = (employeeId) => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
};

// POST - Add new employee
const addEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
};

// DELETE employee by ID
const deleteEmployee = (employeeId) => {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
};

// PUT - Update employee
const updateEmployee = (employeeId, employee) => {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
};

// Export all methods
const EmployeeService = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    deleteEmployee,
    updateEmployee,
};

export default EmployeeService;
