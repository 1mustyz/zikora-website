import CustomButton from "../../components/CustomButton"
import AppStoreImage from '../../images/apple-store.png'
import GooglePlay from '../../images/google-play.png'



const GreenCard = ({greenCardPic, children}) => {
    return (
        <div className='h-full width-full pt-20 sm:pt-[3rem] flex flex-col items-center bg-[#F7F7F7]' >
            <p className='text-[16px] sm:text-[14px] text-[#5E5E5E]'>
                How To
            </p>
            <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]'>
                Get Started
            </p>

            <div className="flex flex-col gap-2 mt-5">

                <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]'>
                    Download the Zikora App now
                </p>
    
                <div className='sm:w-full flex sm:justify-center gap-[1rem]' >
                    <CustomButton 
                        backgroundImageUrl={AppStoreImage} 
                        linkTo='https://apps.apple.com/us/app/zikora/id6444196255' 
                    />
                    
                    <CustomButton 
                        backgroundImageUrl={GooglePlay} 
                        linkTo='https://play.google.com/store/apps/details?id=com.clive.zikora' 
                    />
                        
                </div>
            </div>

    
            {/* green card */}
            <div className="w-[85%] h-[50%] mt-[2rem] flex sm:flex-col">
              {/* left */}
                <div 
                    className="w-[50%] flex flex-col justify-center pl-[4rem] pr-[6rem] bg-[#608E75]
                    rounded-tl-[1.2rem] text-[white] sm:w-[100%] sm:rounded-t-[0.8rem] sm:py-[2rem] sm:px-[1.5rem]"
               >
                  <p className='text-[34px] font-[700] sm:text-[24px]' >
                      Requirements.
                  </p>
    
                  <ul style={{listStyleType: 'disc'}} className='mt-[1rem] ml-[1rem] leading-[180%] text-[white] font-[600] sm:font-[500] text-[17px] sm:text-[16px]'>
                      {children}
                  </ul>
                </div>
                {/* right */}
                <div className="bg-[#404040] w-[50%] rounded-tr-[1.2rem] sm:w-[100%] sm:rounded-none" >
                        <img src={greenCardPic} alt="green card" />
                </div>
            </div>
        </div>
      )
}

export default GreenCard