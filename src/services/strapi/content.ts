import { fetchAPI, postAPI, putAPI, deleteAPI } from '@/lib/strapi/client';

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity {
  id: number;
  attributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiParams {
  populate?: string | string[];
  fields?: string[];
  filters?: Record<string, unknown>;
  sort?: string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

export class StrapiContentService {
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
  }

  async getAll(params: StrapiParams = {}) {
    return fetchAPI(`/${this.collection}`, params);
  }

  async getById(id: number, params: StrapiParams = {}) {
    return fetchAPI(`/${this.collection}/${id}`, params);
  }

  async create(data: Record<string, unknown>) {
    return postAPI(`/${this.collection}`, { data });
  }

  async update(id: number, data: Record<string, unknown>) {
    return putAPI(`/${this.collection}/${id}`, { data });
  }

  async delete(id: number) {
    return deleteAPI(`/${this.collection}/${id}`);
  }

  async findBySlug(slug: string, params: StrapiParams = {}) {
    return fetchAPI(`/${this.collection}`, {
      ...params,
      filters: {
        slug: {
          $eq: slug,
        },
      },
    });
  }
}

// Example usage:
// const blogService = new StrapiContentService('blogs');
// const posts = await blogService.getAll({ populate: 'deep' }); 