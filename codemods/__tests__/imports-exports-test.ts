jest.autoMockOff();
import {defineTest} from "jscodeshift/src/testUtils";
defineTest(__dirname, 'imports-exports', {}, undefined, { parser: "ts" });
