using CastroD.Data;
using CastroD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CastroD.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            EmployeeCity employeeCity = new EmployeeCity();
            employeeCity.Cities = _context.Cities;
            return View(employeeCity);
        }

        [HttpPost]
        public IActionResult Index(Employee employee)
        {
            if (ModelState.IsValid)
            {
                employee.validationName();
                _context.Employee.Add(employee);
                _context.SaveChanges();

                TempData["Message"] = "Успешно созданная форма";

                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet]
        public IActionResult Content()
        {
            IEnumerable<Employee> listEmployees = _context.Employee;
            return View(listEmployees);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
