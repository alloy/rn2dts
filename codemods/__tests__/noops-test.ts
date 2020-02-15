jest.autoMockOff();
import {defineTest} from "jscodeshift/src/testUtils";
defineTest(__dirname, 'noops', {}, undefined, { parser: "ts" });
