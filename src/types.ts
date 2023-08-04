// Memory Client
export interface MemoryClient {
  addMemory: (sessionId: string, payload: Memory) => Promise<Memory>
  getMemory: (sessionId: string) => Promise<Memory>
  deleteMemory: (sessionId: string) => Promise<void>
}

export interface MemoryConfig {
  apiKey?: string
  clientId?: string
  baseUrl?: string
}

export interface Memory {
  messages: Array<{
    content: string
    role: 'Human' | 'AI'
  }>
  context?: string
}

// Comet Client
export interface Comet {
  // index: (payload: IndexInput) => Promise<object>
  prompt: (payload: PromptPayload) => Promise<object>;
  // tune: (payload: TuningInput) => Promise<object>
  // getOne: (id: string) => Promise<object>
  // deleteOne: (id: string) => Promise<object>
  // createResource: (payload: CreateResourcePayload) => Promise<object>
  // uploadFileToUrl: (payload: UploadFileToUrlPayload) => Promise<object>
  // uploadFile: (payload: UploadFilePayload) => Promise<object>
}

export interface IndexInput {
  indexId?: string;
  id?: string;
  imageBase64?: string;
  imageUrl?: string;
  text?: string;
  embedding?: number[];
  metadata?: object;
}

export interface IndexPayload {
  index: string;
  id?: string;
  imageBase64?: string;
  imageUrl?: string;
  text?: string;
  embedding?: number[];
  metadata?: object;
}

export interface BulkIndexPayload {
  data: IndexPayload[];
}

export type Operator = 'eq' | 'gt' | 'gte' | 'lt' | 'lte';

export interface Filter {
  field: string;
  operator: Operator;
  value: string | number;
}

export interface Filters {
  and?: Filter[];
  or?: Filter[];
}

export interface PromptPayload {
  input: string;
  stream?: boolean;
  prompt_variables?: Record<string, string>;
  channel?: string;
  visitorId?: string;
  conversationId?: string;
  openAICompletionsConfig?: {
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    presence_penalty?: number;
    frequency_penalty?: number;
  };
}


export interface SearchPayload {
  index: string
  imageBase64?: string
  imageUrl?: string
  text?: string
  embedding?: number[]
  filters?: Filters
}

export interface TuningInput {
  indexId?: string
  idA: string
  idB: string
  label: -1 | 0 | 1
}

export interface TuningPayload {
  index: string
  idA: string
  idB: string
  label: -1 | 0 | 1
}

export interface CreateResourcePayload {
  indexId: string
  fileName: string
  fileType: string
  fileSize: number
}

export interface UploadFileToUrlPayload {
  url: string
  file: File | Buffer
  fileType: string
  fileSize: number
}

export type UploadFilePayload = File | string

export interface FilePayload {
  fileName: string
  fileType: string
}

export interface CreateFileResouceResponse {
  url: string
}