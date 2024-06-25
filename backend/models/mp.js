
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-7719627064516408-031710-98268c77b535fb6f4c0a5f99f35ec741-1725842309'});

const preference = new Preference(client);

export default preference