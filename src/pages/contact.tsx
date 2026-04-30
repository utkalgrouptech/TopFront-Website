
import { aboutgroup } from '@/assests/About'
import Commonbreacrumb from '@/Components/Common/Commonbreadcrumb'
import Contact from '@/Components/Contact/Contact'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'

const data={
    cont1:"CONTACT US",
    
  }
export default function contact() {
  return (
    <MainLayouts>
         <Commonbreacrumb data={data} image={aboutgroup.src}/>
         <Contact/>
         
    </MainLayouts>
  )
}
