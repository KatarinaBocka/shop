import Vue from 'vue';
import Vuex from 'vuex';
import moduleMebl from './moduleMebl';
import moduleFurniture from './moduleFurniture';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : {
        mebl: moduleMebl,
        furniture: moduleFurniture
    },
    state: {
        products: [
            {
                showQuickViewModal: false,
                id: 1,
                info: [
                    { title: "Luna", dimensions: '260 X 150', mehanizam: 'Obaranje naslona', kutijaZaPosteljinu: 'da', punjenje: 'Val opruge, sunđer', price: 250, oldPrice: 350 }
                ],
                images: [
                    { thumb: 'https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', colorImg: 'https://cdn.shopify.com/s/files/1/2617/9116/products/cc-150-sandybrown_b94d8d0b-a088-481f-8758-83922a073f74_2000x.jpg?v=1516824379' },
                    { thumb: 'https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', colorImg: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Black_colour.jpg' },
                    { thumb: 'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', colorImg: 'https://knobco.com/sites/default/files/styles/product_full/public/legacy_files/files/BPT-181-4X4.jpg?itok=l5xyBeQH' }
                ],
                currentImage: 'https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                currentImageModal: 'https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'

            },
            {
                showQuickViewModal: false,
                id: 2,
                info: [
                    { title: "Polaris", dimensions: '260 X 160', mehanizam: 'Makaze', kutijaZaPosteljinu: 'ne', punjenje: 'Val opruge, sunđer', price: 400, oldPrice: 550 }
                ],
                images: [
                    { thumb: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', colorImg: 'https://cdn.shopify.com/s/files/1/2617/9116/products/cc-150-sandybrown_b94d8d0b-a088-481f-8758-83922a073f74_2000x.jpg?v=1516824379' },
                    { thumb: 'https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', colorImg: 'https://www.colorcombos.com/images/colors/FF0000.png' },
                    { thumb: 'https://images.pexels.com/photos/817783/pexels-photo-817783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', colorImg: 'https://cdn.shopify.com/s/files/1/2617/9116/products/cc-150-sandybrown_b94d8d0b-a088-481f-8758-83922a073f74_2000x.jpg?v=1516824379' }
                ],
                currentImage: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                currentImageModal: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                showQuickViewModal: false,
                id: 3,
                info: [
                    { title: "Silver", dimensions: '260 X 160', mehanizam: 'Makaze', kutijaZaPosteljinu: 'ne', punjenje: 'Val opruge, sunđer', price: 400, oldPrice: 550 }
                ],
                images: [
                    { thumb: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', colorImg: 'https://cdn.shopify.com/s/files/1/2617/9116/products/cc-150-sandybrown_b94d8d0b-a088-481f-8758-83922a073f74_2000x.jpg?v=1516824379' },
                    { thumb: 'https://images.pexels.com/photos/115747/pexels-photo-115747.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', colorImg: 'https://www.colorcombos.com/images/colors/FF0000.png' },
                    { thumb: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', colorImg: 'https://knobco.com/sites/default/files/styles/product_full/public/legacy_files/files/BPT-181-4X4.jpg?itok=l5xyBeQH' }
                ],
                currentImage: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                currentImageModal: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            },
        ], 
    }
});