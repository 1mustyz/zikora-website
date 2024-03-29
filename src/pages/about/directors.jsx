import React,{useEffect, useState} from 'react'

import samplePic from '../../board-images/sample.jpg'
import olisaPic from '../../board-images/Okeke_low.png'
import peterEzePic from '../../board-images/Peter_low.png'
import bernadinePic from '../../board-images/BernadineOkeke_low.png'
import chidozieAgpabuPic from '../../board-images/chidozieAgbapu.png'
import ikeOnyechiPic from '../../board-images/IkeOnyechi.png'
import oliverObiPic from '../../board-images/oliverObi.png'
import tonyIfeachoPic from '../../board-images/Ifeacho.png'
import matthewEzePic from '../../board-images/matthew-eze.png'
import chiomaPic from '../../board-images/chioma.png'
import emmanuelPic from '../../board-images/Emmanuel.png'
import josemariaPic from '../../board-images/josemariaEbisi.png'
import ijaraPic from '../../board-images/chigozieIjara.png'
import trimText from '../../utils/trimText'

import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import { useTransition, animated } from '@react-spring/web'





const Directors = () => {

  const [directorIndex, setDirectorIndex] = useState(0)
  const [managementIndex, setManagementIndex] = useState(0)


  const directorsList = [

    <GroupImage>
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
      </StaffTemplate>

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
      </StaffTemplate>

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
      </StaffTemplate>

    </GroupImage>,

   
    <GroupImage>
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
      </StaffTemplate>

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
      
      </StaffTemplate>

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

      </StaffTemplate>
    </GroupImage>,

    <GroupImage>

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
    </GroupImage>


  ]

  const directorsListMobile = [
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
    </StaffTemplate>,

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
    </StaffTemplate>,

  ]  

  const managementList = [

    <GroupImage>
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
      </StaffTemplate>

      <StaffTemplate
        title={'Matthew Eze'}
        post={'Head, Credit and Marketing'}
        pic={matthewEzePic}
      >
        
        <p>
          Matthew Eze is a Graduate of Accounting and a member of the Chartered Institute of Bankers of Nigeria (CIBN). He has over fourteen cognate years of experience in Banking. He worked with Forward Microfinance Bank Limited for 6 years and rose to the level of Acting Head, Credit and Marketing. He joined Accion Microfinance Bank Limited in 2016 and worked in Internal Control as Branch Controller for 2 years and moved to Commercial Department as a Supervisor and later became the Branch Manager. 
        </p>
        <p>
          He had many recognitions and Awards from Accion Microfinance Bank Limited and was exceptionally promoted by the Management Team for being the Best Manager in the year 2020.
        </p>
      </StaffTemplate>

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
      </StaffTemplate>
    </GroupImage>,


    <GroupImage>

      <StaffTemplate
        title={'Emmanuel Ikogho'}
        post={'Head, Banking Operations'}
        pic={emmanuelPic}
      >

      <p>
      Emmanuel Ikogho is a Graduate of Accounting and a member of the Institute of Chartered Accountants of Nigeria (ICAN). He has sixteen years work experience spanning Banking, Telecommunications, and Estate Development sectors.
      </p>
      <p></p>
      </StaffTemplate>

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
      
      </StaffTemplate>

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

      </StaffTemplate>
    </GroupImage>,

  ]

  const managementListMobile = [

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
      </StaffTemplate>,


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
      <p></p>
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

      </StaffTemplate>

  ]
 

  return (
    <div>
      <div className='flex flex-col mt-12 items-center gap-3 px-16 sm:px-3 '>
          <p className='text-[34px] sm:text-[22px] text-[#404040] font-bold text-center'>Board of Directors</p>
          <p className='text-[16px] sm:text-[14px] text-[#5e5e5e] text-center'>
          The Zikora team is dedicated in building prosperity for our users
          </p>



          <div className='sm:hidden flex flex-col gap-2 w-full'>
            <Carosel 
              handleLeft={()=> {
                if(directorIndex > 0) setDirectorIndex(directorIndex - 1)
              }}
              handleRight={()=> {
                if(directorIndex < directorsList.length -1) setDirectorIndex(directorIndex + 1)
              }}

              data={directorsList}
              index={directorIndex}
              setIndex={setDirectorIndex}
            />
            {directorsList[directorIndex]}
          </div>

          <div className='hidden w-[100%] sm:flex flex-col sm:flex-col-reverse gap-2'>
            <Carosel 
              handleLeft={()=> {
                if(directorIndex > 0) setDirectorIndex(directorIndex - 1)
              }}
              handleRight={()=> {
                if(directorIndex < directorsListMobile.length -1) setDirectorIndex(directorIndex + 1)
              }}

              data={directorsListMobile}
              index={directorIndex}
              setIndex={setDirectorIndex}
            />
            {directorsListMobile[directorIndex]}
          </div>



      </div>

      <div className='flex flex-col my-16 items-center gap-3 px-16 sm:px-3'>
          <p className='text-[34px] sm:text-[22px] text-[#404040] font-bold text-center'>Management Team</p>
          <p className='text-[16px] sm:text-[14px] text-[#5e5e5e] text-center'>
          The Zikora team is dedicated to building prosperity for our users
          </p>

          <div className='sm:hidden flex flex-col gap-2'>
            <Carosel 
              handleLeft={()=> {
                if(managementIndex > 0) setManagementIndex(managementIndex - 1)
              }}
              handleRight={()=> {
                if(managementIndex < managementList.length -1) setManagementIndex(managementIndex + 1)
              }}

              data={managementList}
              index={managementIndex}
              setIndex={setManagementIndex}
            />
            {managementList[managementIndex]}
          </div>

          <div className='hidden w-[100%] sm:flex flex-col sm:flex-col-reverse gap-2'>
            <Carosel 
              handleLeft={()=> {
                if(managementIndex > 0) setManagementIndex(managementIndex - 1)
              }}
              handleRight={()=> {
                if(managementIndex < managementListMobile.length -1) setManagementIndex(managementIndex + 1)
              }}

              data={managementListMobile}
              index={managementIndex}
              setIndex={setManagementIndex}
            />
            {managementListMobile[managementIndex]}
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
      className='px-2 py-2 sm:px-3 sm:py-3 border-1 hover:border-[#66A681] hover:bg-[#66A681] hover:text-[white] cursor-pointer rounded-full'>
      <Icon size={12}/>
    </div>
  )
}


const StaffTemplate = ({pic=samplePic, title, post, children}) => {

  const [readMore, setReadMore] = useState(false)
  useEffect(()=> {
    setReadMore(false)
  },[title])

  return (
    <div className='flex flex-col sm:items-center gap-5 sm:gap-1 w-[400px] sm:w-full '>

      <div  className='w-full sm:w-[85%] flex flex-col'>

        {!readMore && <div style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
          }} className='w-full h-[400px] sm:h-[300px] rounded-full bg-[#f2f2f2] sm:w-full items-center justify-center flex'>
        
        </div>}
        <p className='py-1 text-[22px] sm:text-[18px] text-center'>{title}</p>
        <p className='py-1 text-[14px] sm:text-[12px] text-center text-[#292D32]'>{post}</p>

        {!readMore ? <p 
                onClick={()=> setReadMore(true)}
                className='cursor-pointer text-green-500 text-center'
              > 
              Read more...
        </p>
        :
        <p className='h-6'></p>
        }

      </div>

      {children && <div className='w-full sm:border-1 sm:border-t-0 text-justify sm:px-2 flex flex-col sm:text-[14px] gap-4 text-[#565555]'>
        {children?.map((x, index) => (
          <div>
            {readMore && <p className={''}>
              {x}
               {(index === children.length - 1) && 
               <p
                onClick={() => setReadMore(false)}
                className='cursor-pointer text-green-500 mt-4'
                >
                  View few
                </p>}
            </p>}

          </div>

          
        ))}
      </div>}
    </div>
  )
}

const GroupImage = ({children}) => {
  return (
    <div className='w-[100%] flex gap-5 justify-center'>
      {children}
    </div>
  )
}


const Carosel = ({handleLeft, handleRight, data, setIndex, index}) => {

  return (
    <div className='mt-12 flex flex-col gap-2 self-end  sm:self-center items-center'>
    <div className='flex gap-5'>

      <ClickIcon 
        handleClick={handleLeft}
        Icon={MdOutlineArrowBackIosNew}
      />



      <ClickIcon 
        handleClick={handleRight}
        Icon={MdOutlineArrowForwardIos}
      />
    </div>

    <div className='flex gap-2'>
        {data.map((_,ind) => (
          <p 
            onClick={()=> {
              setIndex(ind)
            }}
            className={`w-[8px] h-[8px] rounded-full ${ind === index ? 'bg-[#66A681]' : 'border-1 border-[#66A681]'} `}/>
        ))}
    </div>
  </div>
  )
}