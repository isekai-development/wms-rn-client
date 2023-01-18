// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getSupplier } from "./api";
import React from "react";
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
} from "native-base";

export default function Supplier() {
  const [data, setData] = React.useState({});

  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    const resp = await getSupplier();
    setData(resp);
  };

  return (
    <Box width="100%">
      <FlatList
        data={data}
        renderItem={({ item, key }) => (
          <Box
            key={key}
            py="3"
            px={"3"}
            mx={3}
            my={3}
            shadow={3}
            bg={"white"}
            rounded="lg"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
                bgColor={"tomato"}
              >
                {item.username &&
                  item.username.split("").splice(0, 2).join("").toUpperCase()}
              </Avatar>
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="tomato"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.address}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.username}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}
