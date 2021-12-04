import { Stack, Divider } from '@chakra-ui/layout';
import { SearchIcon } from '@chakra-ui/icons';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputRightElement,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

export default function SearchForm() {
  return (
    <Formik
      initialValues={{
        protein: '80',
        fat: '80',
        carbs: '80',
        calories: '2000',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // async fetch POST to server goes here
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name="protein">
              {({ field, form }) => (
                <FormControl id="protein">
                  <FormLabel htmlFor="protein" textAlign="center">
                    Protein
                  </FormLabel>
                  <NumberInput
                    id="protein"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    defaultValue={80}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Divider />
            <Field name="fat">
              {({ field, form }) => (
                <FormControl id="fat">
                  <FormLabel htmlFor="fat" textAlign="center">
                    Fat
                  </FormLabel>
                  <NumberInput
                    id="fat"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    defaultValue={80}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Divider />
            <Field name="carbs">
              {({ field, form }) => (
                <FormControl id="carbs">
                  <FormLabel htmlFor="carbs" textAlign="center">
                    Carbs
                  </FormLabel>
                  <NumberInput
                    id="carbs"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    defaultValue={80}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Divider />
            <Field name="calories">
              {({ field, form }) => (
                <FormControl id="calories">
                  <FormLabel htmlFor="calories" textAlign="center">
                    Calories
                  </FormLabel>
                  <NumberInput
                    id="calories"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={100}
                    defaultValue={2000}
                    min={1500}
                    max={4000}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="kcal"
                      mr="2.1rem"
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Divider />
            <IconButton
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              aria-label="Search plans"
              icon={<SearchIcon />}
            />
            <Heading as="h5" size="sm" color="gray.500">
              Search our collection of plans
            </Heading>
            {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
          </Stack>
        </Form>
      )}
    </Formik>
  );
}