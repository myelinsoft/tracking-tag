const { getCurrentUrl, parseCookies } = require('../../trackingtag-core');

function createGa() {
  try {
    const cookies = parseCookies();
    const { _ga } = cookies;

    if (!_ga) {
      return '';
    }

    const [, , value1, value2] = _ga.split('.');
    const convertedValue1 = parseFloat(value1).toString(32);
    const convertedValue2 = parseFloat(value2).toString(32);

    return [convertedValue2, convertedValue1].reverse().join('-');
  } catch (error) {
    console.error('Error occurred while creating GA:', error);
    return '';
  }
}

function createTrackingTag(option) {
  try {
    const { ti, items, ty } = option;
    const url = new URL('https://astg.widerplanet.com/delivery/wpc.php');
    const cookies = parseCookies();

    const queryParams = new URLSearchParams();
    queryParams.set('v', '1');
    queryParams.set('ver', 'npm');
    queryParams.set('r', '1');
    queryParams.set('md', 'bs');
    queryParams.set('ga', createGa());
    queryParams.set('wp_uid', cookies._wp_uid);

    queryParams.set('ti', ti);
    queryParams.set('device', 'web');
    queryParams.set('charset', 'UTF-8');
    queryParams.set('tc', new Date().getTime());
    queryParams.set('loc', getCurrentUrl());

    if (items && items.length > 0) {
      items.forEach((item, index) => {
        const { i, t, p, q } = item;
        queryParams.set(`i${index}`, i);
        queryParams.set(`t${index}`, t);

        if (p) queryParams.set(`p${index}`, p);
        if (q) queryParams.set(`q${index}`, q);
      });
    }

    switch (ty) {
      case 'Item':
        queryParams.set('ty', 'Item');
        break;
      case 'Cart':
        queryParams.set('ty', 'Cart');
        break;
      case 'PurchaseComplete':
        queryParams.set('ty', 'PurchaseComplete');
        break;
      default:
        queryParams.set('ty', 'Home');
    }

    url.search = queryParams.toString();

    if(typeof window === 'undefined'){
      return null
    } else{
      const trackingTag = document.createElement('script');
      trackingTag.src = url.toString();
      document.body.appendChild(trackingTag);
    }

  } catch (error) {
    console.error('Error occurred while creating tracking tag:', error);
  }
}

function TgTag(option) {
  createTrackingTag(option);
}


module.exports = {
  TgTag,
  createGa,
  createTrackingTag
};