import { StrapiContentService } from '../content';
import { fetchAPI, postAPI, putAPI, deleteAPI } from '@/lib/strapi/client';

jest.mock('@/lib/strapi/client');

describe('StrapiContentService', () => {
  let service: StrapiContentService;
  const collection = 'test-collection';

  beforeEach(() => {
    service = new StrapiContentService(collection);
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('calls fetchAPI with correct parameters', async () => {
      const params = { populate: 'deep', pagination: { page: 1 } };
      const mockResponse = { data: [{ id: 1 }] };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.getAll(params);

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}`, params);
      expect(result).toEqual(mockResponse);
    });

    it('calls fetchAPI with empty params by default', async () => {
      const mockResponse = { data: [] };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.getAll();

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}`, {});
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getById', () => {
    it('calls fetchAPI with correct parameters', async () => {
      const id = 1;
      const params = { populate: 'deep' };
      const mockResponse = { data: { id: 1 } };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.getById(id, params);

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}/${id}`, params);
      expect(result).toEqual(mockResponse);
    });

    it('calls fetchAPI with empty params by default', async () => {
      const id = 1;
      const mockResponse = { data: { id: 1 } };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.getById(id);

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}/${id}`, {});
      expect(result).toEqual(mockResponse);
    });
  });

  describe('create', () => {
    it('calls postAPI with correct parameters', async () => {
      const data = { title: 'Test' };
      const mockResponse = { data: { id: 1, ...data } };
      (postAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.create(data);

      expect(postAPI).toHaveBeenCalledWith(`/${collection}`, { data });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('update', () => {
    it('calls putAPI with correct parameters', async () => {
      const id = 1;
      const data = { title: 'Updated' };
      const mockResponse = { data: { id, ...data } };
      (putAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.update(id, data);

      expect(putAPI).toHaveBeenCalledWith(`/${collection}/${id}`, { data });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('delete', () => {
    it('calls deleteAPI with correct parameters', async () => {
      const id = 1;
      const mockResponse = { data: { id } };
      (deleteAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.delete(id);

      expect(deleteAPI).toHaveBeenCalledWith(`/${collection}/${id}`);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findBySlug', () => {
    it('calls fetchAPI with correct parameters', async () => {
      const slug = 'test-slug';
      const params = { populate: 'deep' };
      const mockResponse = { data: { id: 1, slug } };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.findBySlug(slug, params);

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}`, {
        ...params,
        filters: {
          slug: {
            $eq: slug,
          },
        },
      });
      expect(result).toEqual(mockResponse);
    });

    it('calls fetchAPI with empty params by default', async () => {
      const slug = 'test-slug';
      const mockResponse = { data: { id: 1, slug } };
      (fetchAPI as jest.Mock).mockResolvedValue(mockResponse);

      const result = await service.findBySlug(slug);

      expect(fetchAPI).toHaveBeenCalledWith(`/${collection}`, {
        filters: {
          slug: {
            $eq: slug,
          },
        },
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
