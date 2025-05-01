// let num1: Number = new Number(5);
// let num2: number = 5;
// let num3 = Number(5);

// num1 = num2;
// num2 = num1; -- error --

const num = 5;
const strNum: string = num.toString(); // преобразовываем num в строку

const str = "5";
const numStr: number = +str; // преобразовываем str в число

interface Department {
    name: string;
    budget: 50000;
}

const department: Department = {
    name: "web-dev",
    budget: 50000,
};

// Интерфейс проекта
interface Project {
    name: string;
    projectBudget: number;
}

// Функция для преобразования объекта
// На выходе возвращаем интерфейс Project
function transformDepartment(department: Department, amount: number): Project {
    return {
        // Внутренности для возврата
        name: department.name,
        projectBudget: amount,
    };
}

const mainProject: Project = transformDepartment(department, 4000);
