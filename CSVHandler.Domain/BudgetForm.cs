using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Domain
{
    /// <summary>
    /// 預算表單
    /// </summary>
    public class BudgetForm : Form
    {
        /// <summary>
        /// 預算代碼
        /// </summary>
        public string BudgetCode { get; set; }
        /// <summary>
        /// 預算數字
        /// </summary>
        public string BudgetNumber { get; set; }
    }
}
