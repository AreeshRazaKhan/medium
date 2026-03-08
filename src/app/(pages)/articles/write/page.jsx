import React from 'react'
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import Navbar from '../../dashboard/components/Navbar'

const page = () => {
    return (
        <>

            <Navbar />
            <section className='py-20 px-6 lg:px-8'>
                <div className='container mx-auto py-20'>
                    <textarea type="text" placeholder="Article Title" className="w-full text-3xl font-bold focus:outline-none field-sizing-content min-h-12 max-h-75 overflow-y-auto mb-3 resize-none" />
                    <SimpleEditor />


                    <div className='flex items-center justify-center gap-3'>
                        <button className='btn btn-outline'>Cancel</button>
                        <button className='btn btn-primary'>Publish</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default page