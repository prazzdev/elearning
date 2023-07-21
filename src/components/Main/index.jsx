import React from 'react'
import EndpointWrapper from '../EndpointWrapper'

export default function Main() {
  return (
    <>
    <main className='py-8 px-4 lg:px-7'>
        <div className="mb-8">
            <h1 className="poppins font-bold text-xl mb-2">Base URL :</h1>
            <span className="victor font-bold text-md lg:text-xl">https://www.elearning-stb.com</span>
        </div>
        <div className="mb-5">
            <h1 className="poppins font-bold text-xl">Endpoints :</h1>

            {/* GET SLIDE BANNER DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data GAMBAR BANNER SLIDE'}
                endpoint={'banner'}
                // exEndpoint={''}
                jsonResponse={
`{
    status: 200,
    message: 'Success to get slider banner data.',
    data: [
        'https://elearning-stb.com/assets/image/banner1.webp',
        'https://elearning-stb.com/assets/image/banner2.webp',
        'https://elearning-stb.com/assets/image/banner3.webp',
    ]
}`
                } />
            {/* GET BIDANG DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data BIDANG'}
                endpoint={'bidang'}
                // exEndpoint={''}
                jsonResponse={
`{
    status: 200,
    message: 'Success to get bidang data.',
    data: [
        'web-dev',
        'mobile-dev',
        'ui-ux',
    ]
}`
                } />
            {/* GET SUB-BIDANG DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data SUB-BIDANG'}
                endpoint={'bidang/sub-bidang'}
                exEndpoint={'web-dev/sub-bidang'}
                jsonResponse={
`{
    status: 200,
    message: 'Success to get sub-bidang data.',
    data: [
        'front-end',
        'back-end',
        'dev-ops',
    ]
}`
                } />
            {/* GET LIST CHANNEL DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data LIST CHANNEL'}
                endpoint={'bidang/sub-bidang/list-channel'}
                exEndpoint={'web-dev/front-end/list-channel'}
                jsonResponse={
`{
    status: 200,
    message: 'Success to get list channel data.',
    data: [
        'wpunpas',
        'kelas-terbuka',
        'pzn',
    ]
}`
                } />
            {/* GET LIST MATERI DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data LIST MATERI'}
                endpoint={'bidang/sub-bidang/nama-channel/list-materi'}
                exEndpoint={'web-dev/front-end/wpunpas/list-materi'}
                jsonResponse={
`[
    {
        id: '123aa',
        thumbnail: 'https://www.youtube.com/wpunpas/pengenalan-html.jpg',
        title: 'Pengenalan HTML',
        duration: 2.40
    },
    {
        id: '234bb',
        thumbnail: 'https://www.youtube.com/wpunpas/memahami-tag-html.jpg',
        title: 'Memahami Tag HTML',
        duration: 3.24
    }
]`
                } />
            {/* GET MATERI DATA */}
            <EndpointWrapper 
                endpointTitle={'Get data MATERI'}
                endpoint={'bidang/sub-bidang/nama-channel/judul-materi'}
                exEndpoint={'web-dev/front-end/wpunpas/pengenalan-html'}
                jsonResponse={
`{
    status: 200,
    message: 'Success to get materi data.',
    data: {
        id: '123aa',
        title: 'Pengenalan HTML',
        urlVideo: 'https://www.youtube.com/watch?id=1234qwerty',
        deskripsiVideo: 'Pengenalan HTML pada Website.'
    }
}`
                } />
        </div>
    </main>
    </>
  )
}
