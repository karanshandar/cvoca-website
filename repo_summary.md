# Repository Tree

├── .cursor
│   └── rules
│       └── my-custom-rule.mdc
├── .cursorrules
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── .prettierrc
├── README.md
├── data
│   ├── committees.csv
│   ├── managing-committee.csv
│   └── past-presidents.csv
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── _redirects
│   ├── assets
│   │   ├── images
│   │   │   ├── AkashGogri.jpg
│   │   │   ├── AmiSavla.jpg
│   │   │   ├── ChintanRambhia.jpg
│   │   │   ├── ChintanSaiya.jpg
│   │   │   ├── DeepChheda.jpg
│   │   │   ├── GautamMota.jpg
│   │   │   ├── GirishMaru.jpg
│   │   │   ├── HarshDedhia.jpg
│   │   │   ├── HetalGada.jpg
│   │   │   ├── NiharDharod.jpg
│   │   │   ├── ParinGala.jpg
│   │   │   ├── UmangSoni.jpg
│   │   │   ├── ViralSatra.jpg
│   │   │   ├── cvoca-group-photo.jpg
│   │   │   ├── logo-dark.png
│   │   │   └── logo-light.png
│   │   └── pdfs
│   │       ├── annual-report-2024.pdf
│   │       ├── constitution.pdf
│   │       ├── event-brochure-2025.pdf
│   │       ├── membership-form.pdf
│   │       └── newsletter-january-2025.pdf
│   ├── manifest.json
│   └── robots.txt
├── render.yaml
├── scripts
│   └── convert-data.js
├── src
│   ├── App.vue
│   ├── components
│   │   ├── common
│   │   │   ├── BaseCard.vue
│   │   │   ├── CoreCommitteesStructure.vue
│   │   │   ├── ManagingCommitteeHierarchy.vue
│   │   │   └── PastPresidentsGallery.vue
│   │   └── layout
│   │       ├── AppFooter.vue
│   │       └── AppHeader.vue
│   ├── data
│   │   ├── committees.json
│   │   ├── managingCommittee.json
│   │   └── pastPresidents.json
│   ├── main.js
│   ├── plugins
│   │   └── vuetify.js
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   └── app.js
│   ├── utils
│   │   ├── composables.js
│   │   └── constants.js
│   └── views
│       ├── AboutView.vue
│       ├── BlogView.vue
│       ├── ContactView.vue
│       ├── DigitalOutreachView.vue
│       ├── EventsView.vue
│       ├── HomeView.vue
│       └── MembershipView.vue
└── vite.config.js

# File Contents (Limited by Token Budget)

## .eslintrc.js
```js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'vue/no-unused-components': 'error',
    'vue/valid-template-root': 'error',
    'vue/require-v-for-key': 'error',
    'vue/no-v-html': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'error'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
} 
```

## package-lock.json
```json
{
  "name": "cvoca-website",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "cvoca-website",
      "version": "1.0.0",
      "dependencies": {
        "pinia": "^2.1.7",
        "vue": "^3.5.17",
        "vue-router": "^4.5.1",
        "vuetify": "^3.8.10"
      },
      "devDependencies": {
        "@vitejs/plugin-vue": "^5.2.4",
        "vite": "^5.0.0",
        "vite-plugin-vuetify": "^2.1.1",
        "vitest": "^1.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.27.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.27.5.tgz",
      "integrity": "sha512-OsQd175SxWkGlzbny8J3K8TnnDD0N3lrIUtB92xwyRpzaenGZhxDvxN/JgU00U3CDZNj9tPuDJ5H0WS4Nt3vKg==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.3"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.27.6",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.27.6.tgz",
      "integrity": "sha512-ETyHEk2VHHvl9b9jZP5IHPavHYk57EhanlRRuae9XCpb/j5bDCbPPMOBfCWhnl/7EDJz0jEMCi/RhccCE8r1+Q==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jest/schemas": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-29.6.3.tgz",
      "integrity": "sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sinclair/typebox": "^0.27.8"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
      "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.6.tgz",
      "integrity": "sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.44.0.tgz",
      "integrity": "sha512-xEiEE5oDW6tK4jXCAyliuntGR+amEMO7HLtdSshVuhFnKTYoeYMyXQK7pLouAJJj5KHdwdn87bfHAR2nSdNAUA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.44.0.tgz",
      "integrity": "sha512-uNSk/TgvMbskcHxXYHzqwiyBlJ/lGcv8DaUfcnNwict8ba9GTTNxfn3/FAoFZYgkaXXAdrAA+SLyKplyi349Jw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.44.0.tgz",
      "integrity": "sha512-VGF3wy0Eq1gcEIkSCr8Ke03CWT+Pm2yveKLaDvq51pPpZza3JX/ClxXOCmTYYq3us5MvEuNRTaeyFThCKRQhOA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.44.0.tgz",
      "integrity": "sha512-fBkyrDhwquRvrTxSGH/qqt3/T0w5Rg0L7ZIDypvBPc1/gzjJle6acCpZ36blwuwcKD/u6oCE/sRWlUAcxLWQbQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.44.0.tgz",
      "integrity": "sha512-u5AZzdQJYJXByB8giQ+r4VyfZP+walV+xHWdaFx/1VxsOn6eWJhK2Vl2eElvDJFKQBo/hcYIBg/jaKS8ZmKeNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.44.0.tgz",
      "integrity": "sha512-qC0kS48c/s3EtdArkimctY7h3nHicQeEUdjJzYVJYR3ct3kWSafmn6jkNCA8InbUdge6PVx6keqjk5lVGJf99g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.44.0.tgz",
      "integrity": "sha512-x+e/Z9H0RAWckn4V2OZZl6EmV0L2diuX3QB0uM1r6BvhUIv6xBPL5mrAX2E3e8N8rEHVPwFfz/ETUbV4oW9+lQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.44.0.tgz",
      "integrity": "sha512-1exwiBFf4PU/8HvI8s80icyCcnAIB86MCBdst51fwFmH5dyeoWVPVgmQPcKrMtBQ0W5pAs7jBCWuRXgEpRzSCg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.44.0.tgz",
      "integrity": "sha512-ZTR2mxBHb4tK4wGf9b8SYg0Y6KQPjGpR4UWwTFdnmjB4qRtoATZ5dWn3KsDwGa5Z2ZBOE7K52L36J9LueKBdOQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.44.0.tgz",
      "integrity": "sha512-GFWfAhVhWGd4r6UxmnKRTBwP1qmModHtd5gkraeW2G490BpFOZkFtem8yuX2NyafIP/mGpRJgTJ2PwohQkUY/Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loongarch64-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.44.0.tgz",
      "integrity": "sha512-xw+FTGcov/ejdusVOqKgMGW3c4+AgqrfvzWEVXcNP6zq2ue+lsYUgJ+5Rtn/OTJf7e2CbgTFvzLW2j0YAtj0Gg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.44.0.tgz",
      "integrity": "sha512-bKGibTr9IdF0zr21kMvkZT4K6NV+jjRnBoVMt2uNMG0BYWm3qOVmYnXKzx7UhwrviKnmK46IKMByMgvpdQlyJQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.44.0.tgz",
      "integrity": "sha512-vV3cL48U5kDaKZtXrti12YRa7TyxgKAIDoYdqSIOMOFBXqFj2XbChHAtXquEn2+n78ciFgr4KIqEbydEGPxXgA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.44.0.tgz",
      "integrity": "sha512-TDKO8KlHJuvTEdfw5YYFBjhFts2TR0VpZsnLLSYmB7AaohJhM8ctDSdDnUGq77hUh4m/djRafw+9zQpkOanE2Q==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.44.0.tgz",
      "integrity": "sha512-8541GEyktXaw4lvnGp9m84KENcxInhAt6vPWJ9RodsB/iGjHoMB2Pp5MVBCiKIRxrxzJhGCxmNzdu+oDQ7kwRA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.44.0.tgz",
      "integrity": "sha512-iUVJc3c0o8l9Sa/qlDL2Z9UP92UZZW1+EmQ4xfjTc1akr0iUFZNfxrXJ/R1T90h/ILm9iXEY6+iPrmYB3pXKjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.44.0.tgz",
      "integrity": "sha512-PQUobbhLTQT5yz/SPg116VJBgz+XOtXt8D1ck+sfJJhuEsMj2jSej5yTdp8CvWBSceu+WW+ibVL6dm0ptG5fcA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.44.0.tgz",
      "integrity": "sha512-M0CpcHf8TWn+4oTxJfh7LQuTuaYeXGbk0eageVjQCKzYLsajWS/lFC94qlRqOlyC2KvRT90ZrfXULYmukeIy7w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.44.0.tgz",
      "integrity": "sha512-3XJ0NQtMAXTWFW8FqZKcw3gOQwBtVWP/u8TpHP3CRPXD7Pd6s8lLdH3sHWh8vqKCyyiI8xW5ltJScQmBU9j7WA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.44.0.tgz",
      "integrity": "sha512-Q2Mgwt+D8hd5FIPUuPDsvPR7Bguza6yTkJxspDGkZj7tBRn2y4KSWYuIXpftFSjBra76TbKerCV7rgFPQrn+wQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@sinclair/typebox": {
      "version": "0.27.8",
      "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.27.8.tgz",
      "integrity": "sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "5.2.4",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-5.2.4.tgz",
      "integrity": "sha512-7Yx/SXSOcQq5HiiV3orevHUFn+pmMB4cgbEkDYgnkUWb0WfeQ/wa2yFv6D5ICiCQOVpjA7vYDXrC7AGO8yjDHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@vitest/expect": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-1.6.1.tgz",
      "integrity": "sha512-jXL+9+ZNIJKruofqXuuTClf44eSpcHlgj3CiuNihUF3Ioujtmc0zIa3UJOW5RjDK1YLBJZnWBlPuqhYycLioog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "1.6.1",
        "@vitest/utils": "1.6.1",
        "chai": "^4.3.10"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-1.6.1.tgz",
      "integrity": "sha512-3nSnYXkVkf3mXFfE7vVyPmi3Sazhb/2cfZGGs0JRzFsPFvAMBEcrweV1V1GsrstdXeKCTXlJbvnQwGWgEIHmOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "1.6.1",
        "p-limit": "^5.0.0",
        "pathe": "^1.1.1"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner/node_modules/p-limit": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-5.0.0.tgz",
      "integrity": "sha512-/Eaoq+QyLSiXQ4lyYV23f14mZRQcXnxfHrN0vCai+ak9G0pp9iEQukIIZq5NccEvwRB8PUnZT0KsOoDCINS1qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^1.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vitest/runner/node_modules/yocto-queue": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-1.2.1.tgz",
      "integrity": "sha512-AyeEbWOu/TAXdxlV9wmGcR0+yh2j3vYPGOECcIj2S7MkrLyC7ne+oye2BKTItt0ii2PHk4cDy+95+LshzbXnGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-1.6.1.tgz",
      "integrity": "sha512-WvidQuWAzU2p95u8GAKlRMqMyN1yOJkGHnx3M1PL9Raf7AQ1kwLKg04ADlCa3+OXUZE7BceOhVZiuWAbzCKcUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "magic-string": "^0.30.5",
        "pathe": "^1.1.1",
        "pretty-format": "^29.7.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-1.6.1.tgz",
      "integrity": "sha512-MGcMmpGkZebsMZhbQKkAf9CX5zGvjkBTqf8Zx3ApYWXr3wG+QvEu2eXWfnIIWYSJExIp4V9FCKDEeygzkYrXMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyspy": "^2.2.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-1.6.1.tgz",
      "integrity": "sha512-jOrrUvXM4Av9ZWiG1EajNto0u96kWAhJ1LmPmJhXXQx/32MecEKd10pOLYgS2BQx1TgkGhloPU1ArDW2vvaY6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "diff-sequences": "^29.6.3",
        "estree-walker": "^3.0.3",
        "loupe": "^2.3.7",
        "pretty-format": "^29.7.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils/node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.5.17.tgz",
      "integrity": "sha512-Xe+AittLbAyV0pabcN7cP7/BenRBNcteM4aSDCtRvGw0d9OL+HG1u/XHLY/kt1q4fyMeZYXyIYrsHuPSiDPosA==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.27.5",
        "@vue/shared": "3.5.17",
        "entities": "^4.5.0",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.5.17.tgz",
      "integrity": "sha512-+2UgfLKoaNLhgfhV5Ihnk6wB4ljyW1/7wUIog2puUqajiC29Lp5R/IKDdkebh9jTbTogTbsgB+OY9cEWzG95JQ==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-core": "3.5.17",
        "@vue/shared": "3.5.17"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.5.17.tgz",
      "integrity": "sha512-rQQxbRJMgTqwRugtjw0cnyQv9cP4/4BxWfTdRBkqsTfLOHWykLzbOc3C4GGzAmdMDxhzU/1Ija5bTjMVrddqww==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.27.5",
        "@vue/compiler-core": "3.5.17",
        "@vue/compiler-dom": "3.5.17",
        "@vue/compiler-ssr": "3.5.17",
        "@vue/shared": "3.5.17",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.17",
        "postcss": "^8.5.6",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.5.17.tgz",
      "integrity": "sha512-hkDbA0Q20ZzGgpj5uZjb9rBzQtIHLS78mMilwrlpWk2Ep37DYntUz0PonQ6kr113vfOEdM+zTBuJDaceNIW0tQ==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.17",
        "@vue/shared": "3.5.17"
      }
    },
    "node_modules/@vue/devtools-api": {
      "version": "6.6.4",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.6.4.tgz",
      "integrity": "sha512-sGhTPMuXqZ1rVOk32RylztWkfXTRhuS7vgAKv0zjqk8gbsHkJ7xfFf+jbySxt7tWObEJwyKaHMikV/WGDiQm8g==",
      "license": "MIT"
    },
    "node_modules/@vue/reactivity": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.5.17.tgz",
      "integrity": "sha512-l/rmw2STIscWi7SNJp708FK4Kofs97zc/5aEPQh4bOsReD/8ICuBcEmS7KGwDj5ODQLYWVN2lNibKJL1z5b+Lw==",
      "license": "MIT",
      "dependencies": {
        "@vue/shared": "3.5.17"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.5.17.tgz",
      "integrity": "sha512-QQLXa20dHg1R0ri4bjKeGFKEkJA7MMBxrKo2G+gJikmumRS7PTD4BOU9FKrDQWMKowz7frJJGqBffYMgQYS96Q==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.17",
        "@vue/shared": "3.5.17"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.5.17.tgz",
      "integrity": "sha512-8El0M60TcwZ1QMz4/os2MdlQECgGoVHPuLnQBU3m9h3gdNRW9xRmI8iLS4t/22OQlOE6aJvNNlBiCzPHur4H9g==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.17",
        "@vue/runtime-core": "3.5.17",
        "@vue/shared": "3.5.17",
        "csstype": "^3.1.3"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.5.17.tgz",
      "integrity": "sha512-BOHhm8HalujY6lmC3DbqF6uXN/K00uWiEeF22LfEsm9Q93XeJ/plHTepGwf6tqFcF7GA5oGSSAAUock3VvzaCA==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-ssr": "3.5.17",
        "@vue/shared": "3.5.17"
      },
      "peerDependencies": {
        "vue": "3.5.17"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.5.17.tgz",
      "integrity": "sha512-CabR+UN630VnsJO/jHWYBC1YVXyMq94KKp6iF5MQgZJs5I8cmjw6oVMO1oDbtBkENSHSSn/UadWlW/OAgdmKrg==",
      "license": "MIT"
    },
    "node_modules/@vuetify/loader-shared": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@vuetify/loader-shared/-/loader-shared-2.1.0.tgz",
      "integrity": "sha512-dNE6Ceym9ijFsmJKB7YGW0cxs7xbYV8+1LjU6jd4P14xOt/ji4Igtgzt0rJFbxu+ZhAzqz853lhB0z8V9Dy9cQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "upath": "^2.0.1"
      },
      "peerDependencies": {
        "vue": "^3.0.0",
        "vuetify": "^3.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/assertion-error": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chai": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/chai/-/chai-4.5.0.tgz",
      "integrity": "sha512-RITGBfijLkBddZvnn8jdqoTypxvqbOLYQkGGxXzeFjVHvudaPw0HNFD9x928/eUwYWd2dPCugVqspGALTZZQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "assertion-error": "^1.1.0",
        "check-error": "^1.0.3",
        "deep-eql": "^4.1.3",
        "get-func-name": "^2.0.2",
        "loupe": "^2.3.6",
        "pathval": "^1.1.1",
        "type-detect": "^4.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/check-error": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.3.tgz",
      "integrity": "sha512-iKEoDYaRmd1mxM90a2OEfWhjsjPpYPuQ+lMYsoxB126+t8fw7ySEO48nmDg5COTjxDI65/Y2OWpeEHk3ZOe8zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-func-name": "^2.0.2"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/confbox": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/confbox/-/confbox-0.1.8.tgz",
      "integrity": "sha512-RMtmw0iFkeR4YV+fUOSucriAQNb9g8zFR52MWCtl+cCZOFRNL6zeB395vPzFhEjjn4fMxXudmELnl/KF/WrK6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.1.tgz",
      "integrity": "sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-eql": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-4.1.4.tgz",
      "integrity": "sha512-SUwdGfqdKOwxCPeVYjwSyRpJ7Z+fhpwIAtmCUdZIWZ/YP5R9WAsyuSgpLVDi9bjWoN2LXHNss/dk3urXtdQxGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-detect": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/diff-sequences": {
      "version": "29.6.3",
      "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-29.6.3.tgz",
      "integrity": "sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "license": "MIT"
    },
    "node_modules/execa": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-8.0.1.tgz",
      "integrity": "sha512-VyhnebXciFV2DESc+p6B+y0LjSm0krU4OgJN44qFAhBY0TJ+1V61tYD2+wHusZ6F9n5K+vl8k0sTy7PEfV4qpg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^8.0.1",
        "human-signals": "^5.0.0",
        "is-stream": "^3.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^5.1.0",
        "onetime": "^6.0.0",
        "signal-exit": "^4.1.0",
        "strip-final-newline": "^3.0.0"
      },
      "engines": {
        "node": ">=16.17"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-func-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.2.tgz",
      "integrity": "sha512-8vXOvuE167CtIc3OyItco7N/dpRtBbYOsPsXCz7X/PMnlGjYjSGuZJgM1Y7mmew7BKf9BqvLX2tnOVy1BBUsxQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/get-stream": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-8.0.1.tgz",
      "integrity": "sha512-VaUJspBffn/LMCJVoMvSAdmscJyS1auj5Zulnn5UoYcY531UWmdwhRWkcGKnGU93m5HSXP9LP2usOryrBtQowA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/human-signals": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-5.0.0.tgz",
      "integrity": "sha512-AXcZb6vzzrFAUE61HnN4mpLqd/cSIwNQjtNWR0euPm6y0iqx3G4gOXaIDdtdDwZmhwe82LA6+zinmW4UBWVePQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=16.17.0"
      }
    },
    "node_modules/is-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-3.0.0.tgz",
      "integrity": "sha512-LnQR4bZ9IADDRSkvpqMGvt/tEJWclzklNgSw48V5EAaAeDd6qGvN8ei6k5p0tvxSR171VmGyHuTiAOfxAbr8kA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-tokens": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-9.0.1.tgz",
      "integrity": "sha512-mxa9E9ITFOt0ban3j6L5MpjwegGz6lBQmM1IJkWeBZGcMxto50+eWdjC/52xDbS2vy0k7vIMK0Fe2wfL9OQSpQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/local-pkg": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/local-pkg/-/local-pkg-0.5.1.tgz",
      "integrity": "sha512-9rrA30MRRP3gBD3HTGnC6cDFpaE1kVDWxWgqWJUN0RvDNAo+Nz/9GxB+nHOH0ifbVFy0hSA1V6vFDvnx54lTEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mlly": "^1.7.3",
        "pkg-types": "^1.2.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/loupe": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-2.3.7.tgz",
      "integrity": "sha512-zSMINGVYkdpYSOBmLi0D1Uo7JU9nVdQKrHxC8eYlV+9YKK9WePqAlL7lSlorG/U2Fw1w0hTBmaa/jrQ3UbPHtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-func-name": "^2.0.1"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.17",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.17.tgz",
      "integrity": "sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mimic-fn": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-4.0.0.tgz",
      "integrity": "sha512-vqiC06CuhBTUdZH+RYl8sFrL096vA45Ok5ISO6sE/Mr1jRbGH4Csnhi8f3wKVl7x8mO4Au7Ir9D3Oyv1VYMFJw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mlly": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/mlly/-/mlly-1.7.4.tgz",
      "integrity": "sha512-qmdSIPC4bDJXgZTCR7XosJiNKySV7O215tsPtDN9iEO/7q/76b/ijtgRu/+epFXSJhijtTCCGp3DWS549P3xKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.14.0",
        "pathe": "^2.0.1",
        "pkg-types": "^1.3.0",
        "ufo": "^1.5.4"
      }
    },
    "node_modules/mlly/node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/npm-run-path": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-5.3.0.tgz",
      "integrity": "sha512-ppwTtiJZq0O/ai0z7yfudtBpWIoxM8yE6nHi1X47eFR2EWORqfbu6CnPlNsjeN683eT0qG6H/Pyf9fCcvjnnnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^4.0.0"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/npm-run-path/node_modules/path-key": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-4.0.0.tgz",
      "integrity": "sha512-haREypq7xkM7ErfgIyA0z+Bj4AGKlMSdlQE2jvJo6huWD1EdkKYV+G/T4nq0YEF2vgTT8kqMFKo1uHn950r4SQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/onetime": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-6.0.0.tgz",
      "integrity": "sha512-1FlR+gjXK7X+AsAHso35MnyN5KqGwJRi/31ft6x0M194ht7S+rWAvd7PHss9xSKMzE0asv1pyIHaJYq+BbacAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^4.0.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathe": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-1.1.2.tgz",
      "integrity": "sha512-whLdWMYL2TwI08hn8/ZqAbrVemu0LNaNNJZX73O6qaIdCTfXutsLhMkjdENX0qhsQ9uIimo4/aQOmXkoon2nDQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathval": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.1.tgz",
      "integrity": "sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/pinia": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/pinia/-/pinia-2.3.1.tgz",
      "integrity": "sha512-khUlZSwt9xXCaTbbxFYBKDc/bWAGWJjOgvxETwkTN7KRm66EeT1ZdZj6i2ceh9sP2Pzqsbc704r2yngBrxBVug==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-api": "^6.6.3",
        "vue-demi": "^0.14.10"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "typescript": ">=4.4.4",
        "vue": "^2.7.0 || ^3.5.11"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/pkg-types": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/pkg-types/-/pkg-types-1.3.1.tgz",
      "integrity": "sha512-/Jm5M4RvtBFVkKWRu2BLUTNP8/M2a+UwuAX+ae4770q1qVGtfjG+WTCupoZixokjmHiry8uI+dlY8KXYV5HVVQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "confbox": "^0.1.8",
        "mlly": "^1.7.4",
        "pathe": "^2.0.1"
      }
    },
    "node_modules/pkg-types/node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/pretty-format": {
      "version": "29.7.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-29.7.0.tgz",
      "integrity": "sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jest/schemas": "^29.6.3",
        "ansi-styles": "^5.0.0",
        "react-is": "^18.0.0"
      },
      "engines": {
        "node": "^14.15.0 || ^16.10.0 || >=18.0.0"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/react-is": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
      "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/rollup": {
      "version": "4.44.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.44.0.tgz",
      "integrity": "sha512-qHcdEzLCiktQIfwBq420pn2dP+30uzqYxv9ETm91wdt2R9AFcWfjNAmje4NWlnCIQ5RMTzVf0ZyisOKqHR6RwA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.44.0",
        "@rollup/rollup-android-arm64": "4.44.0",
        "@rollup/rollup-darwin-arm64": "4.44.0",
        "@rollup/rollup-darwin-x64": "4.44.0",
        "@rollup/rollup-freebsd-arm64": "4.44.0",
        "@rollup/rollup-freebsd-x64": "4.44.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.44.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.44.0",
        "@rollup/rollup-linux-arm64-gnu": "4.44.0",
        "@rollup/rollup-linux-arm64-musl": "4.44.0",
        "@rollup/rollup-linux-loongarch64-gnu": "4.44.0",
        "@rollup/rollup-linux-powerpc64le-gnu": "4.44.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.44.0",
        "@rollup/rollup-linux-riscv64-musl": "4.44.0",
        "@rollup/rollup-linux-s390x-gnu": "4.44.0",
        "@rollup/rollup-linux-x64-gnu": "4.44.0",
        "@rollup/rollup-linux-x64-musl": "4.44.0",
        "@rollup/rollup-win32-arm64-msvc": "4.44.0",
        "@rollup/rollup-win32-ia32-msvc": "4.44.0",
        "@rollup/rollup-win32-x64-msvc": "4.44.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/std-env": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.9.0.tgz",
      "integrity": "sha512-UGvjygr6F6tpH7o2qyqR6QYpwraIjKSdtzyBdyytFOHmPZY917kwdwLG0RbOjWOnKmnm3PeHjaoLLMie7kPLQw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/strip-final-newline": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-3.0.0.tgz",
      "integrity": "sha512-dOESqjYr96iWYylGObzd39EuNTa5VJxyvVAEm5Jnh7KGo75V43Hk1odPQkNDyXNmUR6k+gEiDVXnjB8HJ3crXw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-literal": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/strip-literal/-/strip-literal-2.1.1.tgz",
      "integrity": "sha512-631UJ6O00eNGfMiWG78ck80dfBab8X6IVFB51jZK5Icd7XAs60Z5y7QdSd/wGIklnWvRbUNloVzhOKKmutxQ6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^9.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/terser": {
      "version": "5.43.1",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.43.1.tgz",
      "integrity": "sha512-+6erLbBm0+LROX2sPXlUYx/ux5PyE9K/a92Wrt6oA+WDAoFTdpHE5tCYCI5PNzq2y8df4rA+QgHLJuR4jNymsg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "optional": true,
      "peer": true,
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.14.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/terser/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinypool": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-0.8.4.tgz",
      "integrity": "sha512-i11VH5gS6IFeLY3gMBQ00/MmLncVP7JLXOw1vlgkytLmJK7QnEr7NXf0LBdxfmNPAeyetukOk0bOYrJrFGjYJQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tinyspy": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-2.2.1.tgz",
      "integrity": "sha512-KYad6Vy5VDWV4GH3fjpseMQ/XU2BhIYP7Vzd0LG44qRWm/Yt2WCOTicFdvmgo6gWaqooMQCawTtILVQJupKu7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/type-detect": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.1.0.tgz",
      "integrity": "sha512-Acylog8/luQ8L7il+geoSxhEkazvkslg7PSNKOX59mbB9cOveP5aq9h74Y7YU8yDpJwetzQQrfIwtf4Wp4LKcw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ufo": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/ufo/-/ufo-1.6.1.tgz",
      "integrity": "sha512-9a4/uxlTWJ4+a5i0ooc1rU7C7YOw3wT+UGqdeNNHWnOF9qcMBgLRS+4IYUqbczewFx4mLEig6gawh7X6mFlEkA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/upath": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
      "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/vite": {
      "version": "5.4.19",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.19.tgz",
      "integrity": "sha512-qO3aKv3HoQC8QKiNSTuUM1l9o/XX3+c+VTgLHbJWHZGeTPVAg2XwazI9UWzoxjIJCGCV2zU60uqMzjeLZuULqA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-1.6.1.tgz",
      "integrity": "sha512-YAXkfvGtuTzwWbDSACdJSg4A4DZiAqckWe90Zapc/sEX3XvHcw1NdurM/6od8J207tSDqNbSsgdCacBgvJKFuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cac": "^6.7.14",
        "debug": "^4.3.4",
        "pathe": "^1.1.1",
        "picocolors": "^1.0.0",
        "vite": "^5.0.0"
      },
      "bin": {
        "vite-node": "vite-node.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/vite-plugin-vuetify": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/vite-plugin-vuetify/-/vite-plugin-vuetify-2.1.1.tgz",
      "integrity": "sha512-Pb7bKhQH8qPMzURmEGq2aIqCJkruFNsyf1NcrrtnjsOIkqJPMcBbiP0oJoO8/uAmyB5W/1JTbbUEsyXdMM0QHQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@vuetify/loader-shared": "^2.1.0",
        "debug": "^4.3.3",
        "upath": "^2.0.1"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "peerDependencies": {
        "vite": ">=5",
        "vue": "^3.0.0",
        "vuetify": "^3.0.0"
      }
    },
    "node_modules/vitest": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-1.6.1.tgz",
      "integrity": "sha512-Ljb1cnSJSivGN0LqXd/zmDbWEM0RNNg2t1QW/XUhYl/qPqyu7CsqeWtqQXHVaJsecLPuDoak2oJcZN2QoRIOag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "1.6.1",
        "@vitest/runner": "1.6.1",
        "@vitest/snapshot": "1.6.1",
        "@vitest/spy": "1.6.1",
        "@vitest/utils": "1.6.1",
        "acorn-walk": "^8.3.2",
        "chai": "^4.3.10",
        "debug": "^4.3.4",
        "execa": "^8.0.1",
        "local-pkg": "^0.5.0",
        "magic-string": "^0.30.5",
        "pathe": "^1.1.1",
        "picocolors": "^1.0.0",
        "std-env": "^3.5.0",
        "strip-literal": "^2.0.0",
        "tinybench": "^2.5.1",
        "tinypool": "^0.8.3",
        "vite": "^5.0.0",
        "vite-node": "1.6.1",
        "why-is-node-running": "^2.2.2"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@types/node": "^18.0.0 || >=20.0.0",
        "@vitest/browser": "1.6.1",
        "@vitest/ui": "1.6.1",
        "happy-dom": "*",
        "jsdom": "*"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        }
      }
    },
    "node_modules/vue": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.5.17.tgz",
      "integrity": "sha512-LbHV3xPN9BeljML+Xctq4lbz2lVHCR6DtbpTf5XIO6gugpXUN49j2QQPcMj086r9+AkJ0FfUT8xjulKKBkkr9g==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.17",
        "@vue/compiler-sfc": "3.5.17",
        "@vue/runtime-dom": "3.5.17",
        "@vue/server-renderer": "3.5.17",
        "@vue/shared": "3.5.17"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/vue-demi": {
      "version": "0.14.10",
      "resolved": "https://registry.npmjs.org/vue-demi/-/vue-demi-0.14.10.tgz",
      "integrity": "sha512-nMZBOwuzabUO0nLgIcc6rycZEebF6eeUfaiQx9+WSk8e29IbLvPU9feI6tqW4kTo3hvoYAJkMh8n8D0fuISphg==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "vue-demi-fix": "bin/vue-demi-fix.js",
        "vue-demi-switch": "bin/vue-demi-switch.js"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "@vue/composition-api": "^1.0.0-rc.1",
        "vue": "^3.0.0-0 || ^2.6.0"
      },
      "peerDependenciesMeta": {
        "@vue/composition-api": {
          "optional": true
        }
      }
    },
    "node_modules/vue-router": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.5.1.tgz",
      "integrity": "sha512-ogAF3P97NPm8fJsE4by9dwSYtDwXIY1nFY9T6DyQnGHd1E2Da94w9JIolpe42LJGIl0DwOHBi8TcRPlPGwbTtw==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-api": "^6.6.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "vue": "^3.2.0"
      }
    },
    "node_modules/vuetify": {
      "version": "3.8.10",
      "resolved": "https://registry.npmjs.org/vuetify/-/vuetify-3.8.10.tgz",
      "integrity": "sha512-3BETdCGh3eB1cV5+dA+L5CYi62Q/Jb09H512GImeYzMHd2R+LntO0F5pNCqVB4KoxymQ4Jej3Q0J6AYmf0KD8w==",
      "license": "MIT",
      "engines": {
        "node": "^12.20 || >=14.13"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/johnleider"
      },
      "peerDependencies": {
        "typescript": ">=4.7",
        "vite-plugin-vuetify": ">=2.1.0",
        "vue": "^3.5.0",
        "webpack-plugin-vuetify": ">=3.1.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        },
        "vite-plugin-vuetify": {
          "optional": true
        },
        "webpack-plugin-vuetify": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    }
  }
}

```

## package.json
```json
{
  "name": "cvoca-website",
  "version": "1.0.0",
  "description": "CVOCA Website - Professional Association for Chartered & Cost Accountants",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "vite preview --host 0.0.0.0 --port $PORT",
    "test": "vitest",
    "test:deployment": "node scripts/test-deployment.js",
    "convert-data": "node scripts/convert-data.js"
  },
  "dependencies": {
    "vue": "^3.5.17",
    "vue-router": "^4.5.1",
    "vuetify": "^3.8.10",
    "pinia": "^2.1.7"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.4",
    "vite": "^5.0.0",
    "vite-plugin-vuetify": "^2.1.1",
    "vitest": "^1.0.0"
  }
}

```

## README.md
```md
# CVOCA Website - Optimized Version

A simplified and optimized website for the CVO Chartered & Cost Accountants Association.

## Features

- **Simplified Architecture**: Removed complex dependencies and unnecessary code
- **Clean UI**: Streamlined components with essential functionality
- **Fast Performance**: Optimized build configuration and reduced bundle size
- **Responsive Design**: Works on all devices
- **Dark/Light Theme**: Toggle between themes

## Pages

- **Home**: Overview and highlights
- **About**: Managing committee, core committees, and past presidents
- **Membership**: Benefits, types, and application form
- **Events**: Upcoming and past events
- **Blog**: Latest articles and newsletter signup
- **Contact**: Contact information and form
- **Digital Outreach**: Social media links and digital initiatives

## Technology Stack

- **Vue 3**: Modern reactive framework
- **Vuetify 3**: Material Design component library
- **Vue Router**: Client-side routing
- **Pinia**: State management
- **Vite**: Fast build tool

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── BaseCard.vue          # Simplified card component
│   └── layout/
│       ├── AppHeader.vue         # Navigation header
│       └── AppFooter.vue         # Footer component
├── stores/
│   └── app.js                    # App state management
├── utils/
│   └── constants.js              # Navigation items
├── views/                        # Page components
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── MembershipView.vue
│   ├── EventsView.vue
│   ├── BlogView.vue
│   ├── ContactView.vue
│   └── DigitalOutreachView.vue
├── App.vue                       # Main app component
├── main.js                       # App entry point
└── router/
    └── index.js                  # Route definitions
```

## Optimization Highlights

### Removed Dependencies
- Complex meta management libraries
- Unnecessary utility libraries
- Heavy build plugins
- Testing frameworks (can be added back if needed)

### Simplified Components
- Removed complex animations and effects
- Streamlined layouts and styling
- Reduced component complexity
- Cleaner code structure

### Performance Improvements
- Smaller bundle size
- Faster build times
- Reduced runtime overhead
- Simplified state management

## Customization

### Adding New Pages
1. Create a new Vue component in `src/views/`
2. Add the route in `src/router/index.js`
3. Add navigation item in `src/utils/constants.js`

### Styling
- Uses Vuetify's design system
- Custom styles kept minimal
- Easy to modify colors and themes

### Data Management
- Static data in component files
- Can be easily connected to APIs
- Simple state management with Pinia

## License

This project is for the CVO Chartered & Cost Accountants Association. 
```

## vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          vuetify: ['vuetify']
        }
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/'
}) 
```

## public\manifest.json
```json
{
  "name": "CVOCA - Chartered & Cost Accountants Association",
  "short_name": "CVOCA",
  "description": "Professional association for Chartered and Cost Accountants",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1976d2",
  "orientation": "portrait-primary",
  "scope": "/",
  "lang": "en",
  "icons": [
    {
      "src": "/assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "categories": ["business", "education", "professional"],
  "screenshots": [
    {
      "src": "/assets/screenshots/desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/assets/screenshots/mobile.png",
      "sizes": "390x844",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ]
} 
```

## scripts\convert-data.js
```js
const fs = require('fs');
const path = require('path');

// Function to parse CSV line with proper handling of quoted fields
function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Function to convert CSV to JSON
function csvToJson(csvContent) {
  const lines = csvContent.trim().split('\n');
  const headers = parseCsvLine(lines[0]);
  
  const jsonData = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue; // Skip empty lines
    
    const values = parseCsvLine(lines[i]);
    const row = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    jsonData.push(row);
  }
  
  return jsonData;
}

// Function to process a CSV file
function processCsvFile(inputPath, outputPath) {
  try {
    console.log(`Processing: ${inputPath}`);
    
    // Read CSV file
    const csvContent = fs.readFileSync(inputPath, 'utf8');
    
    // Convert to JSON
    const jsonData = csvToJson(csvContent);
    
    // Write JSON file
    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`✓ Converted ${jsonData.length} records to: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

// Main conversion function
function convertData() {
  console.log('🔄 Starting CSV to JSON conversion...\n');
  
  // Define file mappings
  const fileMappings = [
    {
      input: 'data/committees.csv',
      output: 'src/data/committees.json'
    },
    {
      input: 'data/managing-committee.csv',
      output: 'src/data/managingCommittee.json'
    },
    {
      input: 'data/past-presidents.csv',
      output: 'src/data/pastPresidents.json'
    }
  ];
  
  // Process each file
  fileMappings.forEach(mapping => {
    if (fs.existsSync(mapping.input)) {
      processCsvFile(mapping.input, mapping.output);
    } else {
      console.error(`✗ Input file not found: ${mapping.input}`);
    }
  });
  
  console.log('\n✅ Data conversion completed!');
}

// Run the conversion
if (require.main === module) {
  convertData();
}

module.exports = { convertData, csvToJson }; 
```

## src\main.js
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app') 
```

## src\data\committees.json
```json
[
  {
    "Committee": "Program",
    "Position": "Chairperson",
    "Name": "CA Jeenal KenilSavla",
    "Village": "Beraja"
  },
  {
    "Committee": "RRC & PD",
    "Position": "Chairperson",
    "Name": "CA Ameet MahendraChheda",
    "Village": "Bidada"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "Chairperson",
    "Name": "CA Nilesh TalakshiDedhia",
    "Village": "Gundala"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "Chairperson",
    "Name": "CA Jigar Ratilal Gogri",
    "Village": "Don"
  },
  {
    "Committee": "Study Circle",
    "Position": "Chairperson",
    "Name": "CA Sanjay VishanjiChheda",
    "Village": "RatadiaGaneshwala"
  },
  {
    "Committee": "Capital Market",
    "Position": "Chairperson",
    "Name": "CA Rahul TalakshiNagda",
    "Village": "Naredi"
  },
  {
    "Committee": "InfoViews",
    "Position": "Chairperson",
    "Name": "CA Ketan NanjiGada",
    "Village": "Raydhanjar"
  },
  {
    "Committee": "Students",
    "Position": "Chairperson",
    "Name": "CA Sunil VallabhjiDedhia",
    "Village": "NaniKhakhar"
  },
  {
    "Committee": "YIME",
    "Position": "Chairperson",
    "Name": "CA HimanshuTalakshi Chheda",
    "Village": "Kundrodi"
  },
  {
    "Committee": "Practice M & D",
    "Position": "Chairperson",
    "Name": "CA Paras KhimjiSavla",
    "Village": "Vanki"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "Chairperson",
    "Name": "CA Vinit DineshGada",
    "Village": "Tragdi"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "Chairperson",
    "Name": "CA Atul ChunilalBheda",
    "Village": "Bhujpur"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "Chairperson",
    "Name": "CA Champak KalyanjiDedhia",
    "Village": "Bharapur"
  },
  {
    "Committee": "Program",
    "Position": "Advisor",
    "Name": "CA Manoj ChunilalShah",
    "Village": "Lakhapur"
  },
  {
    "Committee": "RRC & PD",
    "Position": "Advisor",
    "Name": "CA Hasmukh BhavanjiDedhia",
    "Village": "Koday"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "Advisor",
    "Name": "CA Ashok LakhamshiChheda",
    "Village": "NanaAsambiya"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "Advisor",
    "Name": "CA Navin ChapshiShah",
    "Village": "Naredi"
  },
  {
    "Committee": "Study Circle",
    "Position": "Advisor",
    "Name": "CA Sanjeev DungarshiLalan",
    "Village": "Koday"
  },
  {
    "Committee": "Capital Market",
    "Position": "Advisor",
    "Name": "CA Mulesh ManilalSavla",
    "Village": "Dumra"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "Advisor",
    "Name": "CA Dinesh DevchandGhalla",
    "Village": "RayanCA Atul ChunilalBheda - BhujpurCA Nitin MeghjiMaru - KapayaCA Navin ChapshiShah - Naredi"
  },
  {
    "Committee": "Program",
    "Position": "Convenor",
    "Name": "CA Chintan TarunRambhia",
    "Village": "Ramania"
  },
  {
    "Committee": "RRC & PD",
    "Position": "Convenor",
    "Name": "CA Nihar SureshDharod",
    "Village": "Chassara"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "Convenor",
    "Name": "CA Viral Vinod Satra",
    "Village": "Gundala"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "Convenor",
    "Name": "CA Deep RashminChheda",
    "Village": "RatadiaGaneshwala"
  },
  {
    "Committee": "Study Circle",
    "Position": "Convenor",
    "Name": "CA Hetal Vinit Gada",
    "Village": "Tragadi"
  },
  {
    "Committee": "Capital Market",
    "Position": "Convenor",
    "Name": "CA Akash Rajesh Gogri",
    "Village": "Tunda"
  },
  {
    "Committee": "InfoViews",
    "Position": "Convenor",
    "Name": "CA Ami Harsh Savla",
    "Village": "Rayan"
  },
  {
    "Committee": "Students",
    "Position": "Convenor",
    "Name": "CA Shreya KirtiNagda",
    "Village": "Bhojay"
  },
  {
    "Committee": "YIME",
    "Position": "Convenor",
    "Name": "CA Priti Paras Savla",
    "Village": "Vanki"
  },
  {
    "Committee": "Practice M & D",
    "Position": "Convenor",
    "Name": "CA ParasLaxmichand Maru",
    "Village": "Sabhrai"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "Convenor",
    "Name": "CA Harsh Lalit Soni",
    "Village": "Bambhadai"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "Convenor",
    "Name": "CA PritenBhupendra Shah",
    "Village": "Talvana"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "Convenor",
    "Name": "CA Chintan DhirajSaiya",
    "Village": "Gelda"
  },
  {
    "Committee": "Program",
    "Position": "Jt. Convenor",
    "Name": "CA Viral Vinod Satra",
    "Village": "Gundala"
  },
  {
    "Committee": "RRC & PD",
    "Position": "Jt. Convenor",
    "Name": "CA Deep RashminChheda",
    "Village": "RatadiaGaneshwala"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "Jt. Convenor",
    "Name": "CA Chintan Dhiraj Saiya",
    "Village": "Gelda"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "Jt. Convenor",
    "Name": "CA Akash RajeshGogri",
    "Village": "Tunda"
  },
  {
    "Committee": "Study Circle",
    "Position": "Jt. Convenor",
    "Name": "CA Ami Harsh Savla",
    "Village": "Rayan"
  },
  {
    "Committee": "Capital Market",
    "Position": "Jt. Convenor",
    "Name": "CA Nihar SureshDharod",
    "Village": "Chassara"
  },
  {
    "Committee": "InfoViews",
    "Position": "Jt. Convenor",
    "Name": "CA Grishma NiravSaiya",
    "Village": "Beraja"
  },
  {
    "Committee": "Students",
    "Position": "Jt. Convenor",
    "Name": "CA Hetal Vinit Gada",
    "Village": "Tragadi"
  },
  {
    "Committee": "YIME",
    "Position": "Jt. Convenor",
    "Name": "CA Jill Jayesh Shah",
    "Village": "Pragpur"
  },
  {
    "Committee": "Practice M & D",
    "Position": "Jt. Convenor",
    "Name": "CA Ankur KishorSangoi",
    "Village": "Kapaya"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "Jt. Convenor",
    "Name": "CA Henik DilipShah",
    "Village": "Naredi"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "Jt. Convenor",
    "Name": "CA Ankur KishorGada",
    "Village": "Dumra"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "Jt. Convenor",
    "Name": "CA Paras LaxmichandMaru",
    "Village": "Sabhrai"
  },
  {
    "Committee": "Program",
    "Position": "Jt. Convenor",
    "Name": "CA Meghna VihangMakda",
    "Village": "Beraja"
  },
  {
    "Committee": "RRC & PD",
    "Position": "Jt. Convenor",
    "Name": "CA Ronak Pravin Gada",
    "Village": "Mota Ratadiya"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "Jt. Convenor",
    "Name": "CA Zeel Manilal Vora",
    "Village": "Pragpar"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "Jt. Convenor",
    "Name": "CA Harsh Bipin Nagda",
    "Village": "Godhro"
  },
  {
    "Committee": "Study Circle",
    "Position": "Jt. Convenor",
    "Name": "CA Kushal DevendraDedhia",
    "Village": "Kandagra"
  },
  {
    "Committee": "Capital Market",
    "Position": "Jt. Convenor",
    "Name": "CA Jai Jayantilal Savla",
    "Village": "Koday"
  },
  {
    "Committee": "Students",
    "Position": "Jt. Convenor",
    "Name": "CA Mittal VisheshSangoi",
    "Village": "Sadau"
  },
  {
    "Committee": "YIME",
    "Position": "Jt. Convenor",
    "Name": "CA Virav NitinDedhia",
    "Village": "NaniKhakhar"
  },
  {
    "Committee": "Practice M & D",
    "Position": "Jt. Convenor",
    "Name": "CA Kimi JenishNagda",
    "Village": "Godhra"
  },
  {
    "Committee": "Program",
    "Position": "SpecialInvitee",
    "Name": "CA Paresh KhimjiVora",
    "Village": "Navinar"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SpecialInvitee",
    "Name": "CA Dilip KhushalchandGosar",
    "Village": "Vindh"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SpecialInvitee",
    "Name": "CA Rakesh MaganlalVora",
    "Village": "Don"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SpecialInvitee",
    "Name": "CA Arvind HemrajNagda",
    "Village": "Naredi"
  },
  {
    "Committee": "Study Circle",
    "Position": "SpecialInvitee",
    "Name": "CA Deepesh TalakshiChheda",
    "Village": "Kandagara"
  },
  {
    "Committee": "Capital Market",
    "Position": "SpecialInvitee",
    "Name": "CA Sudhir Shivji Bheda",
    "Village": "Bhujpur"
  },
  {
    "Committee": "InfoViews",
    "Position": "SpecialInvitee",
    "Name": "CA Jasmine SunderjiSawla",
    "Village": "Bhinsra"
  },
  {
    "Committee": "Students",
    "Position": "SpecialInvitee",
    "Name": "CA BharatLaxmichand Nagda",
    "Village": "Naredi"
  },
  {
    "Committee": "YIME",
    "Position": "SpecialInvitee",
    "Name": "CA Jignesh VasantKenia",
    "Village": "Baroi"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SpecialInvitee",
    "Name": "CA Ashwin BhavanjiShah",
    "Village": "Bidada"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SpecialInvitee",
    "Name": "CA Maitri ParasSavla",
    "Village": "Lakhapur"
  },
  {
    "Committee": "Program",
    "Position": "SpecialInvitee",
    "Name": "CA Anil Kantilal Haria",
    "Village": "Shredi"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SpecialInvitee",
    "Name": "CA Jayesh KalyanjiSalia",
    "Village": "Godhara"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SpecialInvitee",
    "Name": "CA Tansukh KeshavjiChheda",
    "Village": "Vanki"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SpecialInvitee",
    "Name": "CA Mehul TalakshiGala",
    "Village": "Vadala"
  },
  {
    "Committee": "Study Circle",
    "Position": "SpecialInvitee",
    "Name": "CA Kirit Pramji Dedhia",
    "Village": "Merau"
  },
  {
    "Committee": "Capital Market",
    "Position": "SpecialInvitee",
    "Name": "CA Nilesh JivrajChhadwa",
    "Village": "Mapar"
  },
  {
    "Committee": "InfoViews",
    "Position": "SpecialInvitee",
    "Name": "CA Kiran KhimjiNandu",
    "Village": "Bidada"
  },
  {
    "Committee": "Students",
    "Position": "SpecialInvitee",
    "Name": "CA Namrata RiteshDedhia",
    "Village": "Merau"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SpecialInvitee",
    "Name": "CA Hitesh KeshavjiPasad",
    "Village": "Kotda(Roha)"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Paras LaxmichandMaru",
    "Village": "Sabhrai"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Sanjay Khetsi Savla",
    "Village": "Moti Rayan"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Kajal Sanjay Gala",
    "Village": "Mota Asambia"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "Pratik BharatShahanand",
    "Village": "Sabhrai"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Vishesh DhirendraSangoi",
    "Village": "Sadau"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Deesha Nitin Shah",
    "Village": "Naredi"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Neha NirajLodhaya",
    "Village": "Nalia"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CS Dipti NikhilChheda",
    "Village": "Godhra"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA BharatSurendra Nandu",
    "Village": "Koday"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Jatin DhanjiFuria",
    "Village": "Talwana"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA Karan DilipShah",
    "Village": "Moti Khakar"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "SubCommittee",
    "Name": "CA Amish ShantilalSangoi",
    "Village": "Toda"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "SubCommittee",
    "Name": "CA Mehul TalakshiGala",
    "Village": "Vadala"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Shreya KirtiNagda",
    "Village": "Bhojay"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Bhavin MavjiDedhia",
    "Village": "Bhujpur"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Manish DevchandNagda",
    "Village": "Naredi"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CA Priten BhupendraShah",
    "Village": "Talvana"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Diti Ankit Shah",
    "Village": "Mapar"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Jainis KetanChheda",
    "Village": "Deshalpar"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Jinesh PareshSavla",
    "Village": "MotaAsambhia"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Heenal PratikFuria",
    "Village": "Kharau"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA Kunjan AtulMaru",
    "Village": "Bidada"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Anant DeepakVora",
    "Village": "Moti Varandi"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA ShraddhaUmang Dedhia",
    "Village": "Bidada"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "SubCommittee",
    "Name": "CA Ankur KishorSangoi",
    "Village": "Kapaya"
  },
  {
    "Committee": "Office Premises &Fund Raising",
    "Position": "SubCommittee",
    "Name": "CA Reenkal JitendraGangar",
    "Village": "Merau"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Zalak MahendraSavla",
    "Village": "Moti Rayan"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Mayank BhupendraGosar",
    "Village": "Vidh"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Kintan NarendraMaru",
    "Village": "Koday"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CA Vihang JitendraMakda",
    "Village": "Beraja"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Ritesh ShashikantSavla",
    "Village": "Ratadiya G"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Chintan VasantSavla",
    "Village": "Merava"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Paras ManojMaru",
    "Village": "Bidada"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Shasan DevchandGala",
    "Village": "Kotda (Roha)"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA Disha HiteshVeera",
    "Village": "Karagogha"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Niraj BharatChheda",
    "Village": "Mokha"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA Pooja RajeshChheda",
    "Village": "RatadiaGaneshwala"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "SubCommittee",
    "Name": "CA Ishita VijayVisariya",
    "Village": "Desalpur"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Harsh Lalit Soni",
    "Village": "Bambhdai"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Het Dhanji Bheda",
    "Village": "Kapaya"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Keyur MahendraRambhia",
    "Village": "Depa"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CS Keyur JitendraFuria",
    "Village": "Bidada"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Hardik Ketan Saiya",
    "Village": "Mokha"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Pratik MahendraChheda",
    "Village": "Doan"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Sohil KishorGangar",
    "Village": "Dehalpur"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Kinjal DineshChheda",
    "Village": "Mota Layja"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA Zeel ManilalVora",
    "Village": "Pragpar"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Karan Dilip Shah",
    "Village": "Moti Khakar"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA Dharmi AditDharod",
    "Village": "Sadau/Patri"
  },
  {
    "Committee": "Representations,ProfessionalUpdate andCoordination",
    "Position": "SubCommittee",
    "Name": "CA Pooja VatsalDedhia",
    "Village": "Godhra"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Akshay NitinSatra",
    "Village": "Luni"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Sanyam JethalalGala",
    "Village": "Devpur"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Nehal Mahir Gada",
    "Village": "Manjal reladia"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CA Kunjesh Raju Shah",
    "Village": "Sanosara"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Jainis KetanChheda",
    "Village": "Deshalpar"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA MeetRameshchandra Gada",
    "Village": "Bhachau"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Pratik GirishMaru",
    "Village": "Doan"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Nirav DineshSaiya",
    "Village": "Gelda"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA MananRamniklal Maru",
    "Village": "Halapur"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Bhavya ChunilalSavla",
    "Village": "Lakadiya"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA Ashay PravinSaiya",
    "Village": "Gelda"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA ParighLaxmichand Sangoi",
    "Village": "Godhro"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Dhiarya RohitBheda",
    "Village": "Mokha"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Vedant Dhiraj Gada",
    "Village": "Samakhiyali"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CA Vaibhav KiritNagda",
    "Village": "Chagdai"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Aman ShashikantHaria",
    "Village": "Sherdi"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Somil Visariya",
    "Village": "Godhra"
  },
  {
    "Committee": "InfoViews",
    "Position": "SubCommittee",
    "Name": "CA Chandni ChintanDedhia",
    "Village": "Talwana"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Kruti Vinit Sangoi",
    "Village": "Toda"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA Shikha JatinRambhia",
    "Village": "Ramania"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Rakshit VasantChheda",
    "Village": "Bidada"
  },
  {
    "Committee": "Digi Outreach",
    "Position": "SubCommittee",
    "Name": "CA AnuragVelchand Shah",
    "Village": "Tragadi"
  },
  {
    "Committee": "Program",
    "Position": "SubCommittee",
    "Name": "CA Nisha Ninad Gala",
    "Village": "Desalpur"
  },
  {
    "Committee": "RRC & PD",
    "Position": "SubCommittee",
    "Name": "CA Jainisha KetanGada",
    "Village": "Raydhanjar"
  },
  {
    "Committee": "Pub & Trn",
    "Position": "SubCommittee",
    "Name": "CA Hiloni Jay Savla",
    "Village": "Beraja"
  },
  {
    "Committee": "Mem.& Recreation",
    "Position": "SubCommittee",
    "Name": "CA Riddhi BhumitGala",
    "Village": "Bhojay"
  },
  {
    "Committee": "Study Circle",
    "Position": "SubCommittee",
    "Name": "CA Yash Hiren Mota",
    "Village": "Devpur"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Smith Vijay Gala",
    "Village": "Vadala"
  },
  {
    "Committee": "Students",
    "Position": "SubCommittee",
    "Name": "CA Trishla PrakashBheda",
    "Village": "Bhujpur"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA KomalChaitanya Dedhia",
    "Village": "Gadhshisha"
  },
  {
    "Committee": "Practice M & D",
    "Position": "SubCommittee",
    "Name": "CA Vipa Ketan Saiya",
    "Village": "Mokha"
  },
  {
    "Committee": "Capital Market",
    "Position": "SubCommittee",
    "Name": "CA Nidhi SandeepChheda",
    "Village": "Rayan"
  },
  {
    "Committee": "YIME",
    "Position": "SubCommittee",
    "Name": "CA Dhruv DineshDedhia",
    "Village": "Toda"
  }
]
```

## src\data\managingCommittee.json
```json
[
  {
    "Name": "CA Harsh Hasmukh Dedhia",
    "Position": "President",
    "Village": "Blank",
    "Email": "harsh_dedhia86@yahoo.com",
    "PhotoFileName": "HarshDedhia.jpg"
  },
  {
    "Name": "CA Gautam Rajesh Mota",
    "Position": "Vice-President",
    "Village": "Blank",
    "Email": "gautam@cgcaindia.com",
    "PhotoFileName": "GautamMota.jpg"
  },
  {
    "Name": "CA Parin Dinesh Gala",
    "Position": "Secretary",
    "Village": "Blank",
    "Email": "gala.parin@gmail.com",
    "PhotoFileName": "ParinGala.jpg"
  },
  {
    "Name": "CA Umang Lalit Soni",
    "Position": "Treasurer",
    "Village": "Blank",
    "Email": "umang@aaumca.com",
    "PhotoFileName": "UmangSoni.jpg"
  },
  {
    "Name": "CA Girish Devraj Maru",
    "Position": "Jt. Secetrary",
    "Village": "Blank",
    "Email": "cagirish@girishdmaru.in",
    "PhotoFileName": "GirishMaru.jpg"
  },
  {
    "Name": "CA Chintan Tarun Rambhia",
    "Position": "Member",
    "Village": "Blank",
    "Email": "ca.chintanrambhia@gmail.com",
    "PhotoFileName": "ChintanRambhia.jpg"
  },
  {
    "Name": "CA Viral Vinod Satra",
    "Position": "Member",
    "Village": "Blank",
    "Email": "viralsatra@yahoo.com",
    "PhotoFileName": "ViralSatra.jpg"
  },
  {
    "Name": "CA Hetal Vinit Gada",
    "Position": "Member",
    "Village": "Blank",
    "Email": "hetal.maru@gmail.com",
    "PhotoFileName": "HetalGada.jpg"
  },
  {
    "Name": "CA Nihar Suresh Dharod",
    "Position": "Member",
    "Village": "Blank",
    "Email": "canihardharod@gmail.com",
    "PhotoFileName": "NiharDharod.jpg"
  },
  {
    "Name": "CA Deep Rashmin Chheda",
    "Position": "Member",
    "Village": "Blank",
    "Email": "dcdeepchheda@gmail.com",
    "PhotoFileName": "DeepChheda.jpg"
  },
  {
    "Name": "CA Chintan Dhiraj Saiya",
    "Position": "Member",
    "Village": "Blank",
    "Email": "chin10saiya@gmail.com",
    "PhotoFileName": "ChintanSaiya.jpg"
  },
  {
    "Name": "CA Akash Rajesh Gogri",
    "Position": "Member",
    "Village": "Blank",
    "Email": "akashgogri@gmail.com",
    "PhotoFileName": "AkashGogri.jpg"
  },
  {
    "Name": "CA Ami Harsh Savla",
    "Position": "Member",
    "Village": "Blank",
    "Email": "amichheda0971.ac@gmail.com",
    "PhotoFileName": "AmiSavla.jpg"
  }
]
```

## src\data\pastPresidents.json
```json
[
  {
    "SrNo": "1",
    "Name": "Late CA Devchand R. Ghalla",
    "Year": "1973-82",
    "Village": "Rayan"
  },
  {
    "SrNo": "2",
    "Name": "CA Kalyanji J. Shah",
    "Year": "1982-84",
    "Village": "Bidada"
  },
  {
    "SrNo": "3",
    "Name": "CA Damji U. Merchant",
    "Year": "1984-86",
    "Village": "Vadala"
  },
  {
    "SrNo": "4",
    "Name": "CA Viren G. Gala",
    "Year": "1986-87",
    "Village": "Kotda (Roha)"
  },
  {
    "SrNo": "5",
    "Name": "Late CA Rajendra D. Pasad",
    "Year": "1987-88",
    "Village": "Bhojay"
  },
  {
    "SrNo": "6",
    "Name": "CA Shantilal K. Rambhia",
    "Year": "1988-89",
    "Village": "Samagoga"
  },
  {
    "SrNo": "7",
    "Name": "CA Navin L. Pasad",
    "Year": "1989-90",
    "Village": "Sherdi"
  },
  {
    "SrNo": "8",
    "Name": "CA Dhiraj L. Gala",
    "Year": "1990-91",
    "Village": "Vadala"
  },
  {
    "SrNo": "9",
    "Name": "CA Chandrakant Nandu",
    "Year": "1991-92",
    "Village": "Bada"
  },
  {
    "SrNo": "10",
    "Name": "CA Dinesh D. Galla",
    "Year": "1992-93",
    "Village": "Rayan"
  },
  {
    "SrNo": "11",
    "Name": "CA Ramesh K. Chheda",
    "Year": "1993-94",
    "Village": "Ratadiya Ganeshwala"
  },
  {
    "SrNo": "12",
    "Name": "CA Atul C. Bheda",
    "Year": "1994-95",
    "Village": "Bhujpur"
  },
  {
    "SrNo": "13",
    "Name": "CA Dhirendra P. Sangoi",
    "Year": "1995-96",
    "Village": "Sadau"
  },
  {
    "SrNo": "14",
    "Name": "CA Haresh K. Chheda",
    "Year": "1996-97",
    "Village": "Mokha"
  },
  {
    "SrNo": "15",
    "Name": "CA Umesh K. Gala",
    "Year": "1997-98",
    "Village": "Kandagara"
  },
  {
    "SrNo": "16",
    "Name": "CA Manoj C. Shah",
    "Year": "1998-99",
    "Village": "Lakhapur"
  },
  {
    "SrNo": "17",
    "Name": "CA Raichand V. Gogri",
    "Year": "1999-00",
    "Village": "Koday"
  },
  {
    "SrNo": "18",
    "Name": "CA Nitin M. Maru",
    "Year": "2000-01",
    "Village": "Kapaya"
  },
  {
    "SrNo": "19",
    "Name": "CA Hiten L. Gada",
    "Year": "2001-02",
    "Village": "Bada"
  },
  {
    "SrNo": "20",
    "Name": "CA Navin C. Shah",
    "Year": "2002-03",
    "Village": "Naredi"
  },
  {
    "SrNo": "21",
    "Name": "CA Rajesh R. Shah",
    "Year": "2003-04",
    "Village": "Patri"
  },
  {
    "SrNo": "22",
    "Name": "CA Mahendra B. Gala",
    "Year": "2004-05",
    "Village": "Mapar"
  },
  {
    "SrNo": "23",
    "Name": "CA Ketan S. Rambhia",
    "Year": "2005-06",
    "Village": "Samagoga"
  },
  {
    "SrNo": "24",
    "Name": "CA Hasmukh B. Dedhia",
    "Year": "2006-07",
    "Village": "Koday"
  },
  {
    "SrNo": "25",
    "Name": "CA Dinesh N. Shah",
    "Year": "2007-08",
    "Village": "Vidh"
  },
  {
    "SrNo": "26",
    "Name": "CA Mulesh M. Savla",
    "Year": "2008-09",
    "Village": "Dumra"
  },
  {
    "SrNo": "27",
    "Name": "CA Hiren D. Shah",
    "Year": "2009-10",
    "Village": "Rayan"
  },
  {
    "SrNo": "28",
    "Name": "CA Champak K. Dedhia",
    "Year": "2010-11",
    "Village": "Bharapar"
  },
  {
    "SrNo": "29",
    "Name": "CA Ketan D. Saiya",
    "Year": "2011-12",
    "Village": "Mokha"
  },
  {
    "SrNo": "30",
    "Name": "CA Ashok L. Chheda",
    "Year": "2012-13",
    "Village": "Asambia"
  },
  {
    "SrNo": "31",
    "Name": "CA Paras K. Savla",
    "Year": "2013-14",
    "Village": "Vanki"
  },
  {
    "SrNo": "32",
    "Name": "CA Himanshu T. Chheda",
    "Year": "2014-15",
    "Village": "Kundrodi"
  },
  {
    "SrNo": "33",
    "Name": "CA Bharat D. Gala",
    "Year": "2015-16",
    "Village": "Godhra"
  },
  {
    "SrNo": "34",
    "Name": "CA Ketan N. Gada",
    "Year": "2016-17",
    "Village": "Raydhanjar"
  },
  {
    "SrNo": "35",
    "Name": "CA Nilesh T. Dedhia",
    "Year": "2017-18",
    "Village": "Gundala"
  },
  {
    "SrNo": "36",
    "Name": "CA Sunil V. Dedhia",
    "Year": "2018-19",
    "Village": "Nani Khakar"
  },
  {
    "SrNo": "37",
    "Name": "CA Sanjay V. Chheda",
    "Year": "2019-20",
    "Village": "Ratadiya Ganeshwala"
  },
  {
    "SrNo": "38",
    "Name": "CA Jigar Ratilal Gogri",
    "Year": "2020-21",
    "Village": "Doan"
  },
  {
    "SrNo": "39",
    "Name": "CA Rahul Talakshi Nagda",
    "Year": "2021-22",
    "Village": "Naredi"
  },
  {
    "SrNo": "40",
    "Name": "CA Ameet Mahendra Chheda",
    "Year": "2022-23",
    "Village": "Bidada"
  },
  {
    "SrNo": "41",
    "Name": "CA Jeenal Kenil Savla",
    "Year": "2023-24",
    "Village": "Beraja"
  }
]
```

## src\plugins\vuetify.js
```js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'cvocaTheme',
    themes: {
      cvocaTheme: {
        dark: false,
        colors: {
          // Modern primary palette with gradient support
          primary: '#2563EB', // Modern blue
          'primary-container': '#DBEAFE',
          'on-primary': '#FFFFFF',
          'on-primary-container': '#1E40AF',
          
          // Enhanced secondary palette
          secondary: '#7C3AED', // Modern purple
          'secondary-container': '#EDE9FE',
          'on-secondary': '#FFFFFF',
          'on-secondary-container': '#5B21B6',
          
          // Tertiary accent
          tertiary: '#059669', // Modern green
          'tertiary-container': '#D1FAE5',
          'on-tertiary': '#FFFFFF',
          'on-tertiary-container': '#047857',
          
          // Surface and background system
          background: '#FAFAFA',
          surface: '#FFFFFF',
          'surface-variant': '#F8FAFC',
          'surface-container': '#F1F5F9',
          'surface-container-high': '#E2E8F0',
          'surface-container-highest': '#CBD5E1',
          
          // Text and content
          'on-surface': '#0F172A',
          'on-surface-variant': '#475569',
          'on-background': '#0F172A',
          
          // Outline and borders
          outline: '#E2E8F0',
          'outline-variant': '#CBD5E1',
          
          // Semantic colors
          error: '#DC2626',
          'error-container': '#FEE2E2',
          'on-error': '#FFFFFF',
          'on-error-container': '#991B1B',
          
          success: '#059669',
          'success-container': '#D1FAE5',
          'on-success': '#FFFFFF',
          'on-success-container': '#047857',
          
          warning: '#D97706',
          'warning-container': '#FEF3C7',
          'on-warning': '#FFFFFF',
          'on-warning-container': '#92400E',
          
          info: '#2563EB',
          'info-container': '#DBEAFE',
          'on-info': '#FFFFFF',
          'on-info-container': '#1E40AF',
        },
        variables: {
          'border-radius-root': '16px',
          'border-radius-extra-small': '4px',
          'border-radius-small': '8px',
          'border-radius-medium': '12px',
          'border-radius-large': '16px',
          'border-radius-extra-large': '24px',
          'border-radius-pill': '9999px',
        },
      },
    },
  },
  defaults: {
    global: {
      ripple: true,
      elevation: 2,
      rounded: 'lg',
    },
    VCard: {
      elevation: 3,
      rounded: 'xl',
    },
    VBtn: {
      rounded: 'lg',
      elevation: 2,
    },
    VTextField: {
      rounded: 'lg',
    },
    VSelect: {
      rounded: 'lg',
    },
  },
  blueprint: 'md3', // Enable Material Design 3 (Material You)
}) 
```

## src\router\index.js
```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/membership', name: 'Membership', component: () => import('../views/MembershipView.vue') },
  { path: '/events', name: 'Events', component: () => import('../views/EventsView.vue') },
  { path: '/blog', name: 'Blog', component: () => import('../views/BlogView.vue') },
  { path: '/digital-outreach', name: 'DigitalOutreach', component: () => import('../views/DigitalOutreachView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
  // Catch-all route for broken links
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard for analytics or logging
router.beforeEach((to, from, next) => {
  // Log navigation for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`Navigating from ${from.path} to ${to.path}`)
  }
  next()
})

// Handle navigation errors
router.onError((error) => {
  console.error('Router error:', error)
  // Redirect to home page on error
  router.push('/')
})

export default router 
```

## src\stores\app.js
```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  function setLoading(loading) {
    isLoading.value = loading
  }

  return {
    isLoading,
    setLoading
  }
}) 
```

## src\utils\composables.js
```js
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

// Scroll tracking composable
export function useScroll(threshold = 20) {
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }
  
  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
  
  return { isScrolled }
}

// Loading state composable
export function useLoading(initialState = false) {
  const isLoading = ref(initialState)
  
  const setLoading = (state) => {
    isLoading.value = state
  }
  
  const withLoading = async (asyncFn) => {
    setLoading(true)
    try {
      return await asyncFn()
    } finally {
      setLoading(false)
    }
  }
  
  return { 
    isLoading: computed(() => isLoading.value), 
    setLoading, 
    withLoading 
  }
}

// Active route checker
export function useActiveRoute() {
  const route = useRoute()
  
  const isActive = (path) => route.path === path
  const isActiveClass = (path, activeClass = 'active') => 
    isActive(path) ? activeClass : ''
  
  return { isActive, isActiveClass }
}

// Form validation utilities
export function useFormValidation() {
  const errors = ref({})
  
  const validateField = (field, value, rules = []) => {
    const fieldErrors = []
    
    for (const rule of rules) {
      const result = rule(value)
      if (result !== true) {
        fieldErrors.push(result)
      }
    }
    
    errors.value[field] = fieldErrors
    return fieldErrors.length === 0
  }
  
  const clearErrors = (field) => {
    if (field) {
      delete errors.value[field]
    } else {
      errors.value = {}
    }
  }
  
  const hasErrors = computed(() => 
    Object.keys(errors.value).some(key => errors.value[key].length > 0)
  )
  
  return {
    errors: computed(() => errors.value),
    validateField,
    clearErrors,
    hasErrors
  }
}

// Media queries composable
export function useBreakpoints() {
  const mobile = ref(false)
  const tablet = ref(false)
  const desktop = ref(false)
  
  const updateBreakpoints = () => {
    const width = window.innerWidth
    mobile.value = width < 768
    tablet.value = width >= 768 && width < 1024
    desktop.value = width >= 1024
  }
  
  onMounted(() => {
    updateBreakpoints()
    window.addEventListener('resize', updateBreakpoints)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints)
  })
  
  return {
    mobile: computed(() => mobile.value),
    tablet: computed(() => tablet.value),
    desktop: computed(() => desktop.value),
    isMobile: computed(() => mobile.value),
    isTablet: computed(() => tablet.value),
    isDesktop: computed(() => desktop.value)
  }
} 
```

## src\utils\constants.js
```js
export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'mdi-home' },
  { path: '/about', label: 'About', icon: 'mdi-information' },
  { path: '/membership', label: 'Membership', icon: 'mdi-account-group' },
  { path: '/events', label: 'Events', icon: 'mdi-calendar' },
  { path: '/blog', label: 'Blog', icon: 'mdi-post' },
  { path: '/digital-outreach', label: 'Outreach', icon: 'mdi-earth' },
  { path: '/contact', label: 'Contact', icon: 'mdi-email' }
]

// Page titles mapping
export const PAGE_TITLES = {
  '/': 'CVOCA - Chartered & Cost Accountants Association',
  '/about': 'About Us - CVOCA',
  '/membership': 'Membership - CVOCA',
  '/events': 'Events - CVOCA',
  '/blog': 'Blog - CVOCA',
  '/contact': 'Contact Us - CVOCA',
  '/digital-outreach': 'Digital Outreach - CVOCA'
}

// Social links configuration
export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', href: 'https://in.linkedin.com/company/cvoca-association', icon: 'mdi-linkedin', external: true },
  { platform: 'Twitter', href: 'https://x.com/cvocain?lang=en', icon: 'mdi-twitter', external: true },
  { platform: 'Facebook', href: 'https://www.facebook.com/CVOCAAssociation/', icon: 'mdi-facebook', external: true },
  { platform: 'Instagram', href: 'https://www.instagram.com/cvocain/?hl=en', icon: 'mdi-instagram', external: true },
  { platform: 'YouTube', href: 'https://www.youtube.com/@cvocharteredcostaccountant9981', icon: 'mdi-youtube', external: true }
]

// Common contact info
export const CONTACT_INFO = [
  { 
    type: 'address', 
    icon: 'mdi-map-marker', 
    label: 'Address', 
    value: '304, Jasmine Apartment, Dadasaheb Phalke Road, Dadar (E), Mumbai 400014, Maharashtra' 
  },
  { type: 'phone', icon: 'mdi-phone', label: 'Mobile', value: '+91-9167928622' },
  { type: 'email', icon: 'mdi-email', label: 'Email', value: 'info@cvoca.org' },
  { type: 'hours', icon: 'mdi-clock', label: 'Office Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' }
]

// Quick links filter helper
export const getQuickLinks = () => NAVIGATION_ITEMS.filter(item => 
  ['/about', '/membership', '/events', '/contact'].includes(item.path)
)

// Common features for home/membership pages
export const CVOCA_FEATURES = [
  {
    title: 'Professional Networking',
    description: 'Connect with fellow professionals and build meaningful industry relationships.',
    icon: 'mdi-account-group',
    color: 'primary',
    link: '/membership'
  },
  {
    title: 'Continuing Education',
    description: 'Access workshops, seminars, and training programs for professional development.',
    icon: 'mdi-school',
    color: 'secondary', 
    link: '/events'
  },
  {
    title: 'Industry Updates',
    description: 'Stay informed about latest regulations, trends, and best practices.',
    icon: 'mdi-newspaper',
    color: 'tertiary',
    link: '/blog'
  },
  {
    title: 'Career Development',
    description: 'Access career resources, job opportunities, and mentorship programs.',
    icon: 'mdi-briefcase',
    color: 'success',
    link: '/about'
  }
]

// Statistics for homepage
export const CVOCA_STATS = [
  { number: '500+', label: 'Members' },
  { number: '50+', label: 'Years' },
  { number: '100+', label: 'Events' }
]

// Membership benefits
export const MEMBERSHIP_BENEFITS = [
  {
    title: 'Professional Networking',
    description: 'Connect with fellow Chartered Accountants and industry professionals.',
    icon: 'mdi-account-group'
  },
  {
    title: 'Continuing Education', 
    description: 'Access to workshops, seminars, and training programs.',
    icon: 'mdi-school'
  },
  {
    title: 'Industry Updates',
    description: 'Stay informed about latest regulations and industry trends.',
    icon: 'mdi-newspaper'
  },
  {
    title: 'Career Opportunities',
    description: 'Access to job postings and career development resources.',
    icon: 'mdi-briefcase'
  },
  {
    title: 'Events & Conferences',
    description: 'Participate in exclusive events and annual conferences.',
    icon: 'mdi-calendar'
  },
  {
    title: 'Resource Library',
    description: 'Access to technical resources, templates, and guidelines.',
    icon: 'mdi-library'
  }
]

// Blog category colors
export const BLOG_CATEGORY_COLORS = {
  'Tax Updates': 'primary',
  'Technology': 'secondary', 
  'Career': 'success',
  'Regulations': 'warning',
  'Events': 'info'
}

// Common hero section component props
export const HERO_DEFAULTS = {
  height: { mobile: '300', desktop: '400' },
  elevation: 0,
  color: 'primary'
} 
```


---
**Total Estimated Tokens Used:** 45780