jest.autoMockOff();
import {defineTest} from "jscodeshift/src/testUtils";
defineTest(__dirname, 'objmap', {}, undefined, { parser: "ts" });
