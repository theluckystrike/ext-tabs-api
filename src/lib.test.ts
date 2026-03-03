import { APIWrapper, createWrapper, Options } from '../src/lib';

describe('APIWrapper', () => {
  let wrapper: APIWrapper;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  describe('constructor', () => {
    it('should create an APIWrapper instance with default options', () => {
      wrapper = new APIWrapper();
      expect(wrapper).toBeInstanceOf(APIWrapper);
    });

    it('should create an APIWrapper instance with custom options', () => {
      const options: Options = { debug: true };
      wrapper = new APIWrapper(options);
      expect(wrapper).toBeInstanceOf(APIWrapper);
    });

    it('should handle undefined options', () => {
      wrapper = new APIWrapper(undefined);
      expect(wrapper).toBeInstanceOf(APIWrapper);
    });
  });

  describe('initialize', () => {
    it('should resolve without errors when debug is false', async () => {
      wrapper = new APIWrapper({ debug: false });
      await expect(wrapper.initialize()).resolves.toBeUndefined();
    });

    it('should resolve without errors when debug is not provided', async () => {
      wrapper = new APIWrapper();
      await expect(wrapper.initialize()).resolves.toBeUndefined();
    });

    it('should log when debug is true', async () => {
      wrapper = new APIWrapper({ debug: true });
      await wrapper.initialize();
      expect(consoleLogSpy).toHaveBeenCalledWith('ext-tabs-api initialized');
    });
  });
});

describe('createWrapper', () => {
  it('should create an APIWrapper instance', () => {
    const wrapper = createWrapper();
    expect(wrapper).toBeInstanceOf(APIWrapper);
  });

  it('should create an APIWrapper with options', () => {
    const options: Options = { debug: true };
    const wrapper = createWrapper(options);
    expect(wrapper).toBeInstanceOf(APIWrapper);
  });

  it('should accept empty options', () => {
    const wrapper = createWrapper({});
    expect(wrapper).toBeInstanceOf(APIWrapper);
  });
});
