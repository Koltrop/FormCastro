using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CastroD.Models
{
    public class EmployeeCity: Employee
    {
        public IEnumerable<City> Cities { get; set; }
    }
}
