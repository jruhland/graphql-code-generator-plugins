import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-filename-case-kebab/schema':
      defineConfig(
        {
          fileOutputCasing: 'kebab-case',
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-filename-case-kebab/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-filename-case-kebab/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
