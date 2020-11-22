import nhost from 'nhost-js-sdk';

const config = {
  base_url: process.env.REACT_APP_NHOST_BACKEND,
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };
