import {
  AppShell,
  Badge,
  Box,
  Button,
  Card,
  Drawer,
  Group,
  Image,
  Modal,
  ScrollArea,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { productListData } from "../data/productlist";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IconShoppingCart, IconPlus, IconMinus } from "@tabler/icons-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  onsale?: boolean;
  details?: Record<string, any>;
}

interface CartProduct extends Product {
  quantity: number;
}

interface RenderDetailsProps {
  details: Record<string, any>;
}

const ProductCatalog = () => {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const RenderDetails = ({ details }: RenderDetailsProps) => {
    return Object.keys(details).map((key) => {
      const value = details[key];

      if (!value) return null;

      return (
        <Box key={key} mb={2} display="flex">
          <Text variant="h6">{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
          {typeof value === "object" ? (
            <Box ml={2}>
              <RenderDetails details={value} />
            </Box>
          ) : Array.isArray(value) ? (
            <Box ml={2} display="flex">
              {value.map((item) => (
                <Text variant="body2" key={item}>
                  {item}
                </Text>
              ))}
            </Box>
          ) : (
            <Text variant="body2">{value}</Text>
          )}
        </Box>
      );
    });
  };

  useEffect(() => {
    setProductList(productListData);
  }, []);

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header
        display="flex"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <Text size="xl" fw={500}>
          Product Catalog
        </Text>
        <IconShoppingCart size={24} onClick={openDrawer} />
      </AppShell.Header>
      <AppShell.Main>
        <SimpleGrid cols={4} spacing="lg">
          {productList.map((product) => (
            <Card
              key={product.id}
              withBorder
              shadow="sm"
              padding="lg"
              radius="md"
            >
              <Card.Section>
                <Image src={product.image} alt={product.name} height={160} />
              </Card.Section>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{product.name}</Text>
                    {product.onsale && <Badge color="cyan">On Sale</Badge>}
                    <Badge color="red">{product.category}</Badge>
                  </Group>
                  <Text size="sm" c="dimmed">
                    {product.description}
                  </Text>
                  <Text>Price: ₹ {product.price}</Text>
                </div>
                <Button.Group>
                  <Button
                    variant="default"
                    mt="md"
                    radius="md"
                    onClick={() => {
                      openModal();
                      setSelectedProduct(product);
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="default"
                    mt="md"
                    radius="md"
                    onClick={() => addToCart(product)}
                    disabled={cart.some((item) => item.id === product.id)}
                  >
                    Add to Cart
                  </Button>
                </Button.Group>
              </div>
            </Card>
          ))}
        </SimpleGrid>
      </AppShell.Main>
      <Modal
        opened={modalOpened}
        onClose={closeModal}
        title="Product Details"
        size="xl"
      >
        <Card shadow="xs" padding="lg" radius="md">
          <Card.Section>
            <Image
              src={selectedProduct?.image}
              alt={selectedProduct?.name}
              height={300}
            />
          </Card.Section>
          <Group mt="md" justify="space-between">
            <Text size="xl" fw={500}>
              {selectedProduct?.name}
            </Text>
            <Badge color="red">{selectedProduct?.category}</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            {selectedProduct?.description}
          </Text>
          {selectedProduct?.details && (
            <RenderDetails details={selectedProduct.details || {}} />
          )}

          <Text>Price: ₹ {selectedProduct?.price}</Text>
          <Button
            color="teal"
            fullWidth
            mt="md"
            radius="md"
            onClick={() => selectedProduct && addToCart(selectedProduct)}
            disabled={
              selectedProduct
                ? cart.some((item) => item.id === selectedProduct.id)
                : true
            }
          >
            Add to Cart
          </Button>
        </Card>
      </Modal>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Shopping Cart"
        offset={8}
        radius="md"
        position="right"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Button
          color="red"
          fullWidth
          radius="md"
          onClick={() => setCart([])}
          mb="md"
          disabled={cart.length === 0}
        >
          Clear Cart
        </Button>
        {cart.map((product) => (
          <Card key={product.id} shadow="xs" padding="md" radius="md" mb="md">
            <Group justify="space-between">
              <Text size="xl" fw={500}>
                {product.name}
              </Text>
              <Button
                color="red"
                onClick={() =>
                  setCart(cart.filter((item) => item.id !== product.id))
                }
              >
                Remove
              </Button>
              <Button
                color="teal"
                onClick={() =>
                  setCart(
                    cart.map((item) =>
                      item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    )
                  )
                }
              >
                <IconPlus />
              </Button>
              <Text>{product.quantity}</Text>
              <Button
                color="teal"
                disabled={product.quantity === 1}
                onClick={() =>
                  setCart(
                    cart.map((item) =>
                      item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    )
                  )
                }
              >
                <IconMinus />
              </Button>
            </Group>
            <Group justify="space-between">
              <Text>₹ {product.price * product.quantity}</Text>
            </Group>
          </Card>
        ))}
        <Card shadow="xs" padding="md" radius="md" mb="md">
          <Group justify="space-between">
            <Text size="xl" fw={500}>
              Total
            </Text>
            <Text>
              ₹{" "}
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </Text>
          </Group>
        </Card>
      </Drawer>
    </AppShell>
  );
};

export default ProductCatalog;
