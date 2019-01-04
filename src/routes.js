import Home from './components/Home.vue';
import Shop from './components/Shop.vue';
    // Shop Children components
    import AllProducts from './components/ShopComponents/AllProducts.vue';
    import MeblProducts from './components/MeblProducts.vue';
    import PlocastiNamestaj from './components/PlocastiNamestaj.vue';
    import SingleProduct from './components/ShopComponents/SingleProduct.vue';
import Contact from './components/Contact.vue';
import AboutUs from './components/AboutUs.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Page from './components/Page.vue';


export default[
    { path: '/', component: Home },
    { path: '/proizvodi', component: Shop, children: [ 
        { path: '', component: AllProducts },
        // Mebl
        { path: '/proizvodi/mebl', name: 'product-list', components: { default: MeblProducts }  },
        { path: 'mebl/:subcategory', component: MeblProducts },
        // Plocasti namestaj
        { path: '/proizvodi/plocasti-namestaj', components: { default: PlocastiNamestaj } },
        { path: 'plocasti-namestaj/:subcategory', component: PlocastiNamestaj },
        // Single Product
        
    ] },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
    { path: '/proizvod/:category/:name/:id', component: SingleProduct },
    { path: '/shopping-cart', component: ShoppingCart },
    { path: '/page', component: Page }
    
] 