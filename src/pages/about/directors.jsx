import React,{useState} from 'react'

import samplePic from '../../board-images/sample.jpg'
import olisaPic from '../../board-images/Okeke_low.png'
import peterEzePic from '../../board-images/Peter_low.png'
import bernadinePic from '../../board-images/BernadineOkeke_low.png'
import chidozieAgpabuPic from '../../board-images/chidozieAgbapu.jpeg'
import ikeOnyechiPic from '../../board-images/IkeOnyechi.jpeg'
import oliverObiPic from '../../board-images/oliverObi.jpeg'
import tonyIfeachoPic from '../../board-images/Ifeacho.png'
import matthewEzePic from '../../board-images/matthew-eze.png'
import chiomaPic from '../../board-images/chioma.png'
import emmanuelPic from '../../board-images/Emmanuel.jpg'
import josemariaPic from '../../board-images/josemariaEbisi.jpeg'
import ijaraPic from '../../board-images/chigozieIjara.jpeg'

import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'



const Directors = () => {

  const [directorIndex, setDirectorIndex] = useState(0)
  const [managementIndex, setManagementIndex] = useState(0)


  const directorsList = [
    <StaffTemplate
    title={'Olisa Okeke'}
    post={'Chairman'}
    pic={olisaPic}

    >
      <p>
        Chief Olisa Okeke obtained his BSBA (Accountancy) and MBA degrees from the Suffolk University, Boston, USA. An experienced qualified accountant and ex-banker, Chief Okeke began his banking career at the State Street Bank Boston, Mass. U.S.A as an analyst before moving over to the defunct Arthur Anderson USA and Nigeria. He later joined the International Merchant Bank (IMB), Nigeria in 1987 where he rose to the position of Senior Manager before joining Ivory Merchant Bank as a General Manager, Corporate Banking.
      </p>
      <p>
        Chief Okeke’s professional memberships include member of the American Institute of Certified Public Accountants (CPA) and Fellow of the Nigerian Institute of Chartered Accountants (FCA).
      </p>
    </StaffTemplate>,

    <StaffTemplate
    title={'Bernadine Okeke'}
    post={'Director'}
    pic={bernadinePic}

    >
      
      <p>
        Mrs. Okeke graduated from Hampton University, Virginia, USA in 1978 with Bachelor degree in Accounting and from Suffolk University, Boston, USA with an MBA degree in 1981. She started her banking career at the Bank of New England, Boston in the USA in 1981.
      </p>
      
      <p>
        In Nigeria, she has worked in a number of banks and other companies including Nigerian American Merchant Bank, Victory Merchant Bank, Seven-Up Bottling Company and First Bank of Nigeria where she rose to the level of Group Executive.
      </p>
    </StaffTemplate>  ,

    <StaffTemplate
      title={'Peter Eze'}
      post={'MD/CEO'}
      pic={peterEzePic}
    >

      <p>
        Peter Eze obtained a B.Sc. degree in Economics from the University of Nigeria, Nsukka in 1985 and an MBA degree in Finance from the same university in 1989. He started his banking career with Chartered Bank Plc, now Stanbic IBTC Bank, in December 1990 and later moved to Zenith Bank Plc where he rose to the position of Deputy General Manager and Regional Manager before retiring in 2012.
      </p>
      
      <p>
        He had attended a number of banking and management courses locally and abroad including the Lagos Business School and Management Advisory Services Inc., Seattle, USA.
      </p>
    </StaffTemplate>,

    <StaffTemplate
      title={'Oliver Obi'}
      post={'Director'}
      pic={oliverObiPic}

    >

      <p>
        Mr. Obi graduated from the University of Nigeria, Nsukka with a B.Sc. (Hons.) Food Science/Tech in 1989 and an MBA, Banking and Finance from the Enugu State University of Technology in 1999.
      </p>

      <p>
        He started his banking career in Orient Bank in 1991 and later worked with other banks including All States Trust Bank, Citizens International Bank, Fortune International Bank as well as UBA Plc and Oceanic Bank where he rose to the position of Senior Manager.
      </p>
    </StaffTemplate>,

    <StaffTemplate
      title={'Chidozie Agbapu'}
      post={'Director'}
      pic={chidozieAgpabuPic}

    >
      <p>
        Mr. Chidozie Agbapu graduated with a BSc Economics degree from the University of Nigeria in 1986 and an M.Sc. in Banking & Finance, from University of Lagos in 1995. He also attended the Advanced Management Program (AMP14) 2000 at Lagos Business School (LBS).
      </p>

      <p>
        A licensed stockbroker, Mr. Agbapu is the founder and co-CEO of Planet Capital Limited (Member of The Nigerian Stock Exchange). He had previously worked in some banking and financial services institutions including New Nigeria Bank, Financial Mortgage (Savings & Loans) Limited, Prominent Securities Limited, Equator Finance & Securities Limited and Emerging Capital Limited (Member of The Nigerian Stock Exchange) as the CEO.
      </p>
    
    </StaffTemplate>,

    <StaffTemplate
      title={'Sir. Ike Onyechi'}
      post={'Director'}
      pic={ikeOnyechiPic}

    >
      <p>
        Sir Ike Onyechi obtained his Bachelor of Pharmacy degree from the University of Nigeria, Nsukka in 1980 and an MBA from the Enugu State University of Technology, Enugu as well as the Advanced Management Programme certificate from the Lagos Business School, LBS.
      </p>

      <p>
        He had worked in Nigerian Hoechst Limited (NGC) before retiring. He is the owner and Chief Executive Officer of Alpha Pharmacy Limited, a distributor of pharmaceutical and ethical products. He is also the Chairman of Clement Industries Limited, among others.
      </p>

    </StaffTemplate>,

    <StaffTemplate
      title={'Tony Ifeacho'}
      post={'Director'}
      pic={tonyIfeachoPic}

    >
     <p>
      Tony Ifeacho has over 15 years banking experience which he gained at Fidelity Bank Plc, Diamond Bank Plc and Broad Bank of Nigeria Ltd. 
     </p>
     <p>
      A graduate of Civil Engineering with an MBA, he has attended various senior management and risk management programmes and seminars at Lagos Business School; Euromoney, U.K.; IESE, Barcelona; Risk Magazine, London; and INSEAD, France.
     </p>
     <p>
      At Diamond Bank where he worked for over 11 years, he held senior management positions which include Head of Corporate Banking Group and Head of Risk Management/Credit Division.
     </p>
    </StaffTemplate>
  ]

  const managementList = [
    <StaffTemplate
      title={'Peter Eze'}
      post={'MD/CEO'}
      pic={peterEzePic}

    >
      <p>
        Peter Eze obtained a B.Sc. degree in Economics from the University of Nigeria, Nsukka in 1985 and an MBA degree in Finance from the same university in 1989. He started his banking career with Chartered Bank Plc, now Stanbic IBTC Bank, in December 1990 and later moved to Zenith Bank Plc where he rose to the position of Deputy General Manager and Regional Manager before retiring in 2012.
      </p>
      <p>
        He had attended a number of banking and management courses locally and abroad including the Lagos Business School and Management Advisory Services Inc., Seattle, USA.
      </p>
    </StaffTemplate>,

    <StaffTemplate
      title={'Matthew Eze'}
      post={'Head, Credit and Marketing'}
      pic={matthewEzePic}
    >
      
      <p>
        Matthew Eze is a Graduate of Accounting and a member of the Chartered Institute of Bankers of Nigeria (CIBN). He has over fourteen cognate years of experience in Banking. He worked with Forward Microfinance Bank Limited for 6 years and rose to the level of Acting Head, Credit and Marketing. He joined Accion Microfinance Bank Limited in 2016 and worked in Internal Control as Branch Controller for 2 years and moved to Commercial Department as a Supervisor and later became the Branch Manager. 
      </p>
      <p>
        He had many recognitions and Awards from Accion Microfinance Bank Limited and was exceptional promoted by the Management Team for being the Best Manager in the year 2020.
      </p>
    </StaffTemplate>  ,

    <StaffTemplate
      title={'Chigozie Ijara'}
      post={'Head, Information Technology'}
      pic={ijaraPic}
    >

      <p>
      Chigozie Ijara is a Graduate of Computer Science, and a technology analyst with a special interest in Security, Infrastructure, and system languages. He has over six cognate years of experience in general IT support.
      </p>
      <p>
      He had attended many seminars on Information Technology Security, Cyber Security and Classified Banking IT Support, and Financial Product Development and Liquidity Management.
      </p>
    </StaffTemplate>,

    <StaffTemplate
      title={'Emmanuel Ikogho'}
      post={'Head, Banking Operations'}
      pic={emmanuelPic}
    >

     <p>
     Emmanuel Ikogho is a Graduate of Accounting and a member of the Institute of Chartered Accountants of Nigeria (ICAN). He has sixteen years work experience spanning Banking, Telecommunications, and Estate Development sectors.
     </p>
    </StaffTemplate>,

    <StaffTemplate
      title={'Chioma Onuoha'}
      post={'Head, Digital Banking'}
      pic={chiomaPic}
    >
     <p>
      Chioma Onuoha is a Graduate of Computer Science with special interests in Digital Marketing and Web Development using Wordpress. Chioma has over nine cognate years of experience in IT support and Digital Marketing. She had undergone training in Oracle 11g, Digital Marketing and Project Management Professional.
     </p>
     <p>
     She worked with Diamond Bank Plc and later Access Bank Limited across Northern Region as Cash Service Representative and IT Support/Digital Marketer for Flexisaf Edu. Soft LTD, Grandville Medical and Laser Hospital as Product Manager/Digital Marketer. She also worked at Protection Plus Services as IT Admin/Support.
     </p>
    
    </StaffTemplate>,

    <StaffTemplate
      title={'Josemaria Ebisi'}
      post={'Financial Controller'}
      pic={josemariaPic}
    >
      <p>
        Josemaria Ebisi obtained B.Sc. in Accountancy from University of Nigeria, Nsukka. He holds certification in Project Management Proficiency and Advanced Quickbooks Accounting.
      </p>

      <p>
      He has over eight years work experience spanning Banking, Hospitality sector, and State Board of Internal Revenue.
      </p>

    </StaffTemplate>,

  ]
 

  return (
    <div>
      <div className='flex flex-col mt-12 items-center gap-3 sm:px-3'>
          <p className='text-[34px] sm:text-[22px] text-[#404040] font-bold text-center'>Board of Directors</p>
          <p className='text-[16px] sm:text-[14px] text-[#5e5e5e] text-center'>
          The Zikora team is dedicated in building prosperity for our users
          </p>

          <div className='mt-12 flex justify-center items-center'>
            {directorsList[directorIndex]}

          </div>

          <div className='mt-12 mb-6 flex justify-center items-center gap-16 '>

            <ClickIcon 
              handleClick={()=> {
                if(directorIndex > 0) setDirectorIndex(directorIndex - 1)
              }}
              Icon={MdOutlineArrowBackIosNew}
            />

  
            <div className='flex gap-2'>
                {directorsList.map((_,index) => (
                  <p 
                    onClick={()=> {
                      setDirectorIndex(index)
                    }}
                    className={`w-[10px] h-[10px] rounded-full ${directorIndex === index ? 'bg-blue-500' : 'border-1 border-[black]'} `}/>
                ))}
            </div>

            <ClickIcon 
              handleClick={()=> {
                if(directorIndex < directorsList.length -1) setDirectorIndex(directorIndex + 1)
              }}
              Icon={MdOutlineArrowForwardIos}
            />
          </div>


      </div>

      <div className='flex flex-col my-16 items-center gap-3 sm:px-3'>
          <p className='text-[34px] sm:text-[22px] text-[#404040] font-bold text-center'>Management Team</p>
          <p className='text-[16px] sm:text-[14px] text-[#5e5e5e] text-center'>
          The Zikora team is dedicated to building prosperity for our users
          </p>

          <div className='mt-12 flex justify-center items-center'>
            {managementList[managementIndex]}

          </div>


          <div className='mt-12 mb-6 flex justify-center items-center gap-16'>

            <ClickIcon 
              handleClick={()=> {
                if(managementIndex > 0) setManagementIndex(managementIndex - 1)
              }}
              Icon={MdOutlineArrowBackIosNew}
            />


           <div className='flex gap-2'>
               {managementList.map((_,index) => (
                 <p 
                 onClick={()=> {
                  setManagementIndex(index)
                }}
                  className={`w-[10px] h-[10px] rounded-full ${managementIndex === index ? 'bg-blue-500' : 'border-1 border-[black]'} `}/>
                 ))}
           </div>
            <ClickIcon 
              handleClick={()=> {
                if(managementIndex < managementList.length -1) setManagementIndex(managementIndex + 1)
              }}
            Icon={MdOutlineArrowForwardIos}
          />
          </div>



      </div>
    </div>
  )
}



 

export default Directors

const ClickIcon = ({Icon,handleClick=()=>{}}) => {
  return (

    <div 
      onClick={handleClick}
      className='px-4 py-4 sm:px-1 sm:py-1 border-1 hover:bg-gray-100 cursor-pointer rounded-full'>
      <Icon/>
    </div>
  )
}


const StaffTemplate = ({pic=samplePic, title, post, children}) => {
  return (
    <div className='flex sm:flex-col gap-5 sm:gap-1 w-[70%] sm:w-[100%] items-center sm:items-start'>

      <div  className='w-[60%] sm:w-[100%]  flex flex-col'>

        <div className='w-full aspect-ratio-16/9 flex justify-center'>

          <img
            className='h-[400px] sm:h-[300px] inset-0 object-cover'
            src={pic}
            alt="staff picture" 
          />
        </div>
        <p className='border-1 text-center py-1 text-[22px] sm:text-[18px] border-b-0'>{title}</p>
        <p className='border-1 text-center py-1 text-[14px] sm:text-[12px] text-[#BDBDBD]'>{post}</p>

      </div>

      <div className='w-[50%] sm:w-[100%] sm:border-1 sm:border-t-0 text-justify sm:px-2 flex flex-col sm:text-[14px] gap-4 text-[#5e5e5e]'>
        {children}
      </div>
    </div>
  )
}