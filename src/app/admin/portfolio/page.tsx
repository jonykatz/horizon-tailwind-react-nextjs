'use client';
import TotalSpent from 'components/admin/default/TotalSpent';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import ComplexTable from 'components/admin/default/ComplexTable';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

const Portfolio = () => {
  return (
    <div>
      <span className=' text-navy-700 dark:text-white'>Portfolio IOL</span>
      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 ">
        <TotalSpent />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5">

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

      </div>
    </div>
  );
};

export default Portfolio;
