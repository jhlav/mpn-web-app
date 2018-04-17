import { GraphQLEnumType as EnumType } from 'graphql';

const PlatformInputType = new EnumType({
  name: 'PlatformInput',
  values: {
    GC: { value: 'Gamecube' },
    N64: { value: 'Nintendo 64' },
    PC: { value: 'PC' },
    WII: { value: 'Wii' },
  },
});

export default PlatformInputType;
