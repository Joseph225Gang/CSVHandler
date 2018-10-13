using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Domain
{
    /// <summary>
    /// 進口表單
    /// </summary>
    public class ImportForm : Form
    {
        /// <summary>
        /// 進口代碼
        /// </summary>
        public string ImportCode { get; set; }
        /// <summary>
        /// 進口數字
        /// </summary>
        public string ImportNumber { get; set; }
    }
}
