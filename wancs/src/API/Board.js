import { NoAuthAjax as Ajax } from './Ajax';

async function get() {
  let response;

  try {
    response = await Ajax.get('/v1/bookmark');
  } catch (e) {
    throw e.message;
  }

  const { error, message } = response.data;

  if (error === 1) {
    throw message;
  }

  return response.data;
}

//

export default { get };
