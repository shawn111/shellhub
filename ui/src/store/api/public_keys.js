import http from '@/store/helpers/http';

export const postPublicKey = async (data) => http().post('/sshkeys/public_keys', {
  name: data.name,
  data: data.data,
});

export const fetchPublicKeys = async (perPage, page) => http().get(`/sshkeys/public_keys?per_page=${perPage}&page=${page}`);

export const getPublicKey = async (id) => http().get(`/sshkeys/public_keys/${id}`);

export const putPublicKey = async (data) => http().put(`/sshkeys/public_keys/${data.id}`, {
  name: data.name,
  data: data.data,
});

export const removePublicKey = async (id) => http().delete(`/sshkeys/public_keys/${id}`);
