jest.autoMockOff();
import {defineTest} from "jscodeshift/src/testUtils";
defineTest(__dirname, 'react', {}, undefined, { parser: "ts" });
