import React, { ReactNode } from "react";
import { useDeviceDetect } from "../hooks/useDeviceDetect";


const DesktopCss = React.lazy(() => import('./TitlePageDesktop'));
const MobileCss = React.lazy(() => import('./TitlePageMobile'));


const ScreenSelector = ({ children }:{children: ReactNode}) => {
  const {isMobile,isDesktop} = useDeviceDetect();

    return (
      <>
        <React.Suspense fallback={<></>}>
          {isDesktop && <DesktopCss />}
          {isMobile && <MobileCss />}
        </React.Suspense>
        {children}
      </>
    )
  }

export default ScreenSelector