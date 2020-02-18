jest.autoMockOff();
import {defineTest} from "jscodeshift/src/testUtils";
defineTest(__dirname, 'private', {}, undefined, { parser: "ts" });
