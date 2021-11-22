using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CastroD.Models
{
    public class Employee
    {

        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Обязательность заполнения")]
        [Display(Name = "ФИО")]
        [RegularExpression(@"^[\s]{0,}[А-Яа-я]{1,20}[-\s][А-Яа-я]{1,20}[-\s][А-Яа-я]{1,20}[\s]{0,}", ErrorMessage = "Раскладка «кириллица». Может содержать «-», « ».")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Обязательность заполнения")]
        [DataType(DataType.Date)]
        [Display(Name = "Дата рождения")]
        public DateTime Birthday { get; set; }

        [Display(Name = "Номер телефона")]
        [RegularExpression(@"[7-8]\(9[0-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}",
            ErrorMessage = "Неправильно {0}, правильный формат: «8(9**)-***-**-**» или «7(9**)-***-**-**». ")]
        public string Phone { get; set; }

        [Display(Name = "ИНН")]
        [StringLength(12, ErrorMessage = "{0} надо количество чисел {1}", MinimumLength = 12)]
        [RegularExpression("[0-9]{12}", ErrorMessage = "{0} надо содержит только числа.")]
        public string Inn { get; set; }

        [Required(ErrorMessage = "Обязательность заполнения")]
        [EmailAddress(ErrorMessage = "Неправильно {0}")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Обязательность заполнения")]
        [Display(Name = "Место прохождения")]
        public string Place { get; set; }

        [Required(ErrorMessage = "Обязательность заполнения")]
        [Display(Name = "Дата и время записи")]
        public DateTime Date { get; set; }

        public void validationName()
        {
            string[] characters = { " ", "-" };
            string[] txt = Name.Split(characters, StringSplitOptions.RemoveEmptyEntries);
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < txt.Length; i++)
            {
                if (i != txt.Length - 1)
                    stringBuilder.Append(txt[i] + " ");
                else stringBuilder.Append(txt[i]);
            }
            this.Name = stringBuilder.ToString();
        }

    }
}
