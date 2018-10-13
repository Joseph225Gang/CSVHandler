using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Domain
{
    /// <summary>
    /// 表單
    /// </summary>
    public class Form
    {
        /// <summary>
        /// 建檔時間
        /// </summary>
        public DateTime? BuildDate { get; set; }
        /// <summary>
        /// 金錢
        /// </summary>
        public Decimal? Amount { get; set; }
        /// <summary>
        /// 表單代碼
        /// </summary>
        public string FormCode { get; set; }
    }
}
