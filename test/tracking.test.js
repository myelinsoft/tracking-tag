import { createTrackingTag } from '../src/index';

jest.mock('../src/index', () => ({
  createTrackingTag: jest.fn(),
}));

describe('createTrackingTag', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call createTrackingTag with correct option', () => {
    const option = { ti: 'home', items: [] };
    createTrackingTag(option);

    expect(createTrackingTag).toHaveBeenCalledTimes(1);
    expect(createTrackingTag).toHaveBeenCalledWith(option);
  });
});