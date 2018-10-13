using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Domain
{
    /// <summary>
    /// 出口表單
    /// </summary>
    public class ExportForm : Form
    {
        /// <summary>
        /// 出口代碼
        /// </summary>
        public string ExportCode { get; set; }
        /// <summary>
        /// 出口數字
        /// </summary>
        public int ExportNumber { get; set; }
    }
}
