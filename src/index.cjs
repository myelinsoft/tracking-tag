const { getCurrentUrl, parseCookies } = require('trackingtag-core');

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
    const url = new URL('https://astg.widerplanet.com/delivery/wpc.php');
    const queryParams = new URLSearchParams({
      v: '1',
      ver: 'npm',
      r: '1',
      md: 'bs',
      ga: createGa(),
      wp_uid: parseCookies()._wp_uid,
      ti: option.ti,
      device: 'web',
      charset: 'UTF-8',
      tc: new Date().getTime(),
      loc: getCurrentUrl(),
      ty: option.ty || 'Home',
    });

    if (option.items && option.items.length > 0) {
      option.items.forEach((item, index) => {
        queryParams.set(`i${index}`, item.i);
        queryParams.set(`t${index}`, item.t);
        if (item.p) queryParams.set(`p${index}`, item.p);
        if (item.q) queryParams.set(`q${index}`, item.q);
      });
    }

    url.search = queryParams.toString();

    const trackingTag = document.createElement('script');
    trackingTag.src = url.toString();
    document.body.appendChild(trackingTag);
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