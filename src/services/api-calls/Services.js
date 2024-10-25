export const headersData = async (params) => {
  return {
    headers: {
      'Content-Type': params?.type ? params.type : 'application/json',
      Authorization: params?.token ? `Bearer ${params.token}` : '',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization',
      'Accept-Language': params?.currentLanguageShortCut ? params.currentLanguageShortCut : '',
      'apikey': params?.apikey ? params.apikey : '',
      'langcode': params?.langcode ? params.langcode : '',
      'reqfrom': params?.reqfrom ? params.reqfrom : '',
      'sukey': params?.sukey ? params.sukey : '',
      'tzofs': params?.tzofs ? params.tzofs : '',
      'tzstr': params?.tzstr ? params.tzstr : '',
      'Origin': params?.origin ? params.origin : '',
      'Referer': params?.referer ? params.referer : '',
      'User-Agent': params?.userAgent ? params.userAgent : '',
      'drukey':  params?.drukey ? params.drukey : '',

    },
  };
};
